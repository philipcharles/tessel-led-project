'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('ledCtrl', function($scope, $log, ledAPIservice) {
		$scope.ledData = [];
		// API URL path
		var APIpath = "api-examples/bitcoin-api.json";

		// Overview section
		ledAPIservice.getData(APIpath).success(function(response){
			$scope.ledData = response;

			angular.forEach(response, function(v, k){
				var gridTable = "",
					gridData = [];

				angular.forEach(response[k].content, function(datacontent, type){
					gridData.push(datacontent);
					$log.log(datacontent);
				});

				$log.log(gridData);

				// for(var i=0;i<response[k].grid_h;i++){
				// 	var gridRows = "<tr>";

				// 	for(var j=0;j<response[k].grid_w;i++){
						
				// 	}
				// }

				// angular.forEach(response[k], function(value, key){
				// 	if(key="grid_h"){
				// 		for(i=0;i<value;i++){
				// 			for(j=0;j<)
				// 		};
				// 	};
				// });
			});
		});
	});
