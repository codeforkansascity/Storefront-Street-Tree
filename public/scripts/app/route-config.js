(function() {

    'use strict'

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/locations', {
                templateUrl: '/scripts/app/locations/locations.html',
                controller: 'LocationsController',
                controllerAs: 'vm'
            });
    }
}());