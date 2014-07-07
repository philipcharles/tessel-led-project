'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('ledCtrl', function($scope, $sce, ledAPIservice) {
		// API URL path
		var APIpath = "api-examples/bitcoin-api.json";
			$scope.tableList = [];
			$scope.elmwidth = [];

		// Overview section
		ledAPIservice.getData(APIpath).success(function(response){
			var gridTable = "";

			angular.forEach(response, function(v, k){
				var gridRows = "",
					gridCols = "";

				for(var i=0;i<response[k].grid_h;i++){
					gridCols = "";
					for(var j=0;j<response[k].grid_w;j++){
						if(response[k].content.type[i+j] == "image"){
							gridCols += "<td><img src="+response[k].content.data[i+j]+" height='"+document.getElementById('led-inner-block').offsetHeight+"' /></td>";
						}else{
							var textheight = (document.getElementById('led-inner-block').offsetHeight/response[k].grid_h)-2;
							gridCols += "<td style='color:"+response[k].content.textcolor[i+j]+";font-size:"+textheight+"px;line-height:"+textheight+"px;'>"+response[k].content.data[i+j]+"</td>";
						}
					};
					gridRows += "<tr>"+gridCols+"</tr>";
				};

				gridTable = "<table>"+gridRows+"</table>";
				$scope.tableList.push(gridTable);

			});
			$scope.ledData = function(tablegrid){
				return $sce.trustAsHtml(tablegrid);
			};
		});
	}).
	controller('tickerCtrl', function($scope, $log, $timeout, $interval) {
		$timeout(function(){
			var addstyle = document.createElement('style'),
				largestWidth = Math.max.apply(Math, $scope.elmwidth),
				keyframeCalculation = ".animating{-webkit-animation: scrolling infinite 1s linear;animation: scrolling infinite 1s linear;}@keyframes scrolling {0% {transform: translateX(0);}100% {transform: translateX(-"+largestWidth+"px);}}@-webkit-keyframes scrolling {0% {-webkit-transform: translateX(0);}100% {-webkit-transform: translateX(-"+largestWidth+"px);}}";
			$log.log(keyframeCalculation);
			addstyle.type = "text/css";
			if (addstyle.styleSheet){
				addstyle.styleSheet.cssText = keyframeCalculation;
			} else {
				addstyle.appendChild(document.createTextNode(keyframeCalculation));
			};
			document.head.appendChild(addstyle);

			$interval(function(){
				$scope.tableList.push($scope.tableList.shift());
			},1000);
		}, 600);

	});
