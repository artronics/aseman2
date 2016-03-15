'use strict';

/**
 * @ngdoc function
 * @name asemanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the asemanApp
 */
angular.module('asemanApp')
    .controller('MapController', ['$http','$interval',function ($http,$interval) {
        var self = this;


        function tick(){
            $http.get('http://localhost:8080/clients/map').then(function(response){
                self.clients=response.data;
                //console.log(response.data);
            });
        };

        $interval(tick,500);
    }]);
