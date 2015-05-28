(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('LocationsController', LocationsController);
        
        LocationsController.$inject = ['api'];
        
        function LocationsController($http) {
           var vm  = this;
           
           api.getLocations()
           .then(function(data) {
               vm.locations = data;
           })
        //   $http.get('/searches/api/locations')
        //     .then(function(response) {
        //         vm.locations = response.data;
        //     },
        //     function(reason) {
        //         console.log(reason);
        //     })
        //     .catch(function(err) {
        //         console.log(err);
        //     })
        }
}());