var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
    firstName: {type:String, required: 'Please enter first name'},
    lastName: {type:String, required: 'Please enter last name'},
    email: {type:String, required: 'Please enter email'},
    password: {type:String, required: 'Please enter password'},
    created: {type: Date, default: Date.now}
});

userSchema.path('email').validate(function(value, next) {
   userService.findUser(value, function(err, user) {
       if (err) {
           console.log("here is error:")
           console.log(err);
           return next(false);
       }
       next(!user); 
   });
}, 'Email already in use.');

var User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};