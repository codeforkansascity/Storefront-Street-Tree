(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('LocationsController', LocationsController);
        
        LocationsController.$inject = ['$http'];
        
        function LocationsController($http) {
            var vm = this;
            
            $http.get('/searches/api/locations')
               .then(function(response) {
                    vm.locations = response.data;
                },
                function(reason) {
                    console.log(reason);
                })
                .catch(function(err) {
                    console.log(err);
                })
               
        //   getLocations()
        //   .then(function(data) {
        //       vm.locations = data;
        //   })
        //   $http.post('/searches/api/locations')
     
        }
}());