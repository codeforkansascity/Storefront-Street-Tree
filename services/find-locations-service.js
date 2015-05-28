var config = require('../config');
var http = require('http');

var host = "http://data.leafly.com/";
var path = "locations/";
var app_id = config.leaflyId;
var app_key = config.leaflyKey;
var url = [host, path].join(); 
var method = "post";

var args = {
    page: 0,
    take: 10,
    latitude: 40.015,
    longitude: -105.279,
    retail: true
};

exports.getLocations = function(next) {
   
   
    // var queryLocation = ???|--->config.address<---|???
    // var args = {
    //     
    // }
    // api.dispensary_list(args, function(err, dispensaries) {
    //     if (err) {
    //         console.log(err);
    //         return next(err);
    //     }
    //     next(null, dispensaries);
    // });
};

exports.getLocationDetails = function(locationId, next) {
    api.location_details({lid: locationId}, function(err,details) {
        if (err) {
            console.log(err);
        }
        next(err, details);
    });
}