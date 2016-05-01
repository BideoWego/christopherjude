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
          },
          "summary": {
            controller: 'RootCtrl',
            templateUrl: '/js/templates/summary.html'
          },
          "blog": {
            controller: 'RootCtrl',
            templateUrl: '/js/templates/blog.html'
          },
          "projects": {
            controller: 'RootCtrl',
            templateUrl: '/js/templates/projects.html'
          }
        },
        resolve: {
          me: ['MeService', function(MeService) {
            return MeService.get();
          }]
        }
      });

  }]);




