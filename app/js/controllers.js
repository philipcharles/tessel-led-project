'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('ledCtrl', function($scope, $log, $sce, ledAPIservice) {
		// API URL path
		var APIpath = "api-examples/bitcoin-api.json";

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

				gridTable += "<table>"+gridRows+"</table>";

			});
			$scope.ledData = function(){
				return $sce.trustAsHtml(gridTable);
			};
		});
	});
