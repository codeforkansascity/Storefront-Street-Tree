(function() {
    'use strict';
    angular
        .module('app')
        .factory('api', apiFactory);
        
    apiFactory.$inject = ['$http'] ;
    
    function apiFactory($http) {
        return {
            getLocations: getLocations       
        };
        
        function getLocations() {
            return $http.get('/searches/api/locations')
                .then(function(response) {
                    return response.data;
                });
        }
    }
}());