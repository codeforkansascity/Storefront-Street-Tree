'use strict';

var config = require('../config');
var http = require('http');
var request = require('request');
var unirest = require('unirest');
var host = "http://data.leafly.com";
var path = "/locations";
    request.app_id = config.leaflyId;
request.app_key = config.leaflyKey;
var url = [host, path].join(); 

exports.getLocations = function(next) {
    
    var args = {
        app_id: config.leafly_id,
        app_key: config.leafly_key,
        page: 0,
        take: 10,
        latitude: config.latitude,
        longitude: config.longitude,
        retail: true
    };
    // request.post(
     
    //     {
    //         url: url,
    //         header: {
    //             app_id: config.leafly_id,
    //             app_key: config.leafly_key,
    //         },
    //         data: args
    //     }, function(err, response, next) {
    //         if (err) {
    //             return next(err);
    //         }
    //         console.log("success");
    //         console.log(response);
    //         // next(null, locations);
    // });
    unirest.post(url)
        .headers({'Accept': 'application/json', "app_id": config.leaflyId, "app_key": config.leaflyKey})
        .send({ "data": args })
        .end(function (err, response) {
            if (err) {
                console.log(err);
            }
            next(response);
        });
};





    //     api.locations_list(args, function(err, locations) {
    //     if (err) {
    //         console.log(err);
    //         return next(err);
    //     }
    //     next(null, locations);
    // });
//   $.ajax({
//       url: url,
//       method: "post",
//       data: args,
//       dataType: JSON
       
//   }).done(function(res) {
//       console.log(res);
//   });
   
    // var queryLocation = ???|--->config.address<---|???
    // var args = {
    //     
    // }


exports.getLocationDetails = function(locationId, next) {
    // api.location_details({lid: locationId}, function(err,details) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     next(err, details);
    // });
}