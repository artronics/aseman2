'use strict';

/**
 * @ngdoc function
 * @name asemanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the asemanApp
 */
angular.module('asemanApp')
    .controller('PacketController', ['$http','$interval',function ($http,$interval) {
        var self = this;

        self.colDef=[
            {field:'rid',displayName:'ID'},
            {field:'type',displayName:'TYPE'},
            {field:'dir',displayName:'DIR'},
            {field:'srcAdd',displayName:'SRC'},
            {field:'dstAdd',displayName:'DST'},
            {field:'clientId',displayName:'CLNT'},
            {field:'sentAt',displayName:'SENT'},
            {field:'receivedAt',displayName:'RECV'},
        ];
        self.gridOptions={
            data:self.packets,
            columnDefs:self.colDef,
        };

        function tick(){
            $http.get('http://localhost:8080/packets').then(function(response){
                self.packets=response.data;
                console.log(response.data);
                self.gridOptions={
                    data:self.packets,
                    columnDefs:self.colDef,
                };
            });
        };

        $interval(tick,300);
    }]);
