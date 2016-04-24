// ----------------------------------------
// App
// ----------------------------------------


var ChristopherJude = angular.module('ChristopherJude', ['ui.router']);

ChristopherJude.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          "": {
            controller: 'RootCtrl',
            templateUrl: '/js/templates/me.html'
          }
        }
      });

  }]);




