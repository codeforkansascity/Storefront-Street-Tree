(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('MenuController', MenuController);
        
    MenuController.$inject = ['api', '$routeParams', 'ngDialog', '$scope'];
    
    function MenuController(api, $routeParams, ngDialog, $scope) {
        var vm = this;
        
        vm.items = [];
        
        api.getLocationDetails($routeParams.locId)
            .then(function(data) {
                vm.location = data;
            });
        
        vm.viewItem = function(item) {
            vm.activeItem = item;
            vm.activeItem.options = [];
            
            ngDialog.open({
                template: 'item.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
        };
        
        vm.toggleOption = function(option) {
          var index = vm.activeItem.options.indexOf(option);
          if (index > -1) {
              vm.activeItem.options.splice(index, 1);
              return;
          }
          vm.activeItem.options.push(option);
        };
        
        vm.addItem = function(item) {
            var newItem = {
                id: item.id,
                name: item.name
            };
            if (item.options.length > 0) {
                newItem.options = item.options.map(function(item) {
                    return {id: item.id, name: item.name};
                });
            }
            vm.items.push(newItem);
            ngDialog.close();
            console.log(vm.items);
        };
        
        vm.cancel = function() {
            ngDialog.close();
        };
    }
}());