
var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var locationService = require('../services/find-locations-service');

// var request = require('request');
// var host = "http://data.leafly.com";
// var path = "/locations";
// var app_id = config.leaflyId;
// var app_key = config.leaflyKey;
// var url = [host, path].join();
// var args = {
//     app_id: app_id,
//     app_key: app_key,
//     page: 0,
//     take: 10,
//     latitude: config.latitude,
//     longitude: config.longitude,
//     retail: true
// };

router.get('/', restrict, function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    var vm = { 
        title: 'New Search', 
        firstName: req.user ? req.user.firstName : null
    }
  res.render('searches/index', vm);
});

router.get('/api/locations', restrict, function(res, req, next) {
    locationService.getLocations(function(err, locations) {
        if (err) {
            return res.status(500).json({error: "Failed to retrieve locations"});
        }
        res.json(locations);
    })
});

         

       
                
// router.post(url, function(args, res, next) {
//       console.log(res)
// });
             

router.get('/api/location-details/:locId', function(req, res, next) {
    locationService.getLocationDetails(req.params.locId, function(err, details) {
        if (err) {
            return res.status(500).json({error: 'Failed to retrieve details'});
        }
        res.json(details);
    })
});

module.exports = router;
