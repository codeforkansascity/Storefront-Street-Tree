(function() {
    'use strict';
    angular
        .module('app')
        .factory('api', apiFactory);
        
    apiFactory.$inject = ['$http'] ;
    
    function apiFactory($http) {
        return {
            getLocations: getLocations,
            getLocationDetails: getLocationDetails
        };
        
        function getLocations() {
            return $http.get('/searches/api/locations')
                .then(function(response) {
                    return response.data;
                });
        }
        
        function getLocationDetails(locId) {
            return $http.get('/searches/api/location-details/' + locId)
            .then(function(response) {
                return response.data;
            })
        }
    }
}());