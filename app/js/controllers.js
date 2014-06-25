'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('ledCtrl', function($scope, ledAPIservice) {
		$scope.ledData = [];
		// API URL path
		$scope.APIpath = "../api-examples/bitcoin.json";

		// Overview section
		ledAPIservice.getData(APIpath).success(function(response){
			$scope.ledData = response;

			// angular.forEach($scope.ledData, function(value, key){
				
			// });
		});
	});
