(function() {
  'use strict';

  angular
    .module('remixAdmin')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
     // })
     // .when('/finalScreen', {
     //    templateUrl: 'app/main/finalScreen.html',
     //    controller: 'finalScreenController'  
     // });
  }

 // app.controller('finalScreenController', function($scope) {
 //   $scope.pageClass = 'finalScreenController';
                
//});

})();
