var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var dispensarySearch = require('../services/dispensary-search');

router.get('/', restrict, function(req, res, next) {
    // if (!req.isAuthenticated()) {
    //     return res.redirect('/');
    // }
    var vm = { 
        title: 'New Search', 
        firstName: req.user ? req.user.firstName : null
    }
  res.render('searches/index', vm);
});

router.get('/locations', restrict, function(res, req, next) {
    dispensarySearch.callDispensarySearch(function(err, dispensaries) {
        if (err) {
            return res.status(500).json({error: "Failed to retrieve dispensaries"});
        }
        res.json(dispensaries)
    })
})

module.exports = router;
