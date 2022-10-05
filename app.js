//register app
var app = angular.module('NavLinks', [ ]);

//register controller
//something
app.controller('MainController', ['$scope', function($scope) {
        $scope.navLinks = ['home', 'projects', 'services', 'contact'];
        $scope.active='';

        $scope.toggleActiveClass = function (navLink) {
           console.log(navLink);
           $scope.active = navLink;
        }
    }]);
    