(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', LocationsController);

        HomeController.$inject = ['$http'];

        function HomeController($http) {
            var vm = this;



        }
}());