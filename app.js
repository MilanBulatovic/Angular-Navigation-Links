var app = angular.module('NavBar', [ ]);

app.controller('MainController', ['$scope', function($scope) {
        $scope.navLinks = ['home', 'projects', 'services', 'contact'];
        $scope.active='';

        $scope.toggleActiveClass = (navLink) => {
           console.log(navLink);
           $scope.active = navLink;
        }
    }]);
    