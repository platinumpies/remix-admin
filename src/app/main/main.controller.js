(function() {
  'use strict';

  angular
    .module('remixAdmin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, preloader, cfpLoadingBar, $q, $log, $rootScope) {
    var vm = this;
    vm.toggle = true;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447798239285;
    vm.showToastr = showToastr;
    
    vm.imageLocations = [
                    "/assets/images/effects-background-faded.png",
                    "/assets/images/vocal-background-faded.png",
                    "/assets/images/eq-background-faded.png",
                    "/assets/images/bass-background-faded.png",
                    "/assets/images/random-background-faded.png",
                    "/assets/images/melody-background-faded.png",
                    "/assets/images/random-icon.png",
                    "/assets/images/bass-icon.png",
                    "/assets/images/vocal-icon.png",
                    "/assets/images/eq-icon.png",
                    "/assets/images/effects-icon.png",
                    "/assets/images/melody-icon.png",
                    "/assets/images/user.png",
                    "/assets/images/smirnoff-logo.png"

      ];
      // Preload the images; then, update display when returned.
     preloader.preloadImages( vm.imageLocations )
   
    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
