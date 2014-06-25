'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  		when('/', {templateUrl: 'partials/partial1.html', controller: 'ledCtrl'}).
		// when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'}).
		otherwise({redirectTo: '/'});
}]);
