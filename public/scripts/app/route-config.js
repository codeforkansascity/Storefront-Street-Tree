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
            })
            .when('/menu/:locId', {
                templateUrl: '/scripts/app/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'vm'
            });
    }
}());