'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('findWidth', function($document, $timeout, $log) {
    return function(scope, elm, attrs) {
    	$timeout(function(){
	    	var elementwidth = elm[0].offsetWidth;
	    	scope.$watch('elementwidth', function(){
		    	scope.elmwidth.push(elementwidth);
	    	});
    	}, 500);
    };
  });
