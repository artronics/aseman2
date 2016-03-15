'use strict';

/**
 * @ngdoc overview
 * @name asemanApp
 * @description
 * # asemanApp
 *
 * Main module of the application.
 */
angular
  .module('asemanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
      'ui.grid',
  ])

  .config(function ($routeProvider,$httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      delete $httpProvider.defaults.headers.common['X-Requested-With'];

  });
