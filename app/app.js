// 'use strict';

// var commonDir = 'common';
// var directivesDir = commonDir + '/directives';
// var filtersDir = commonDir + '/filters';
// var servicesDir = commonDir + '/services';
// var target = angular.module('target', [
// 	'ngResource',
// 	'ngRoute',
// ])
// .config(function ($routeProvider) {
// $routeProvider
// 	.when('/', {
// 		templateUrl: 'modules/main/main.html',
// 		controller: 'mainCtrl',
// 	})
// 	.otherwise({
// 		redirectTo: '/test'
// 	});
// });

'use strict';

var commonDir = 'common';
var directivesDir = commonDir + '/directives';
var filtersDir = commonDir + '/filters';
var servicesDir = commonDir + '/services';
var target = angular.module('target', [
	'ngResource',
	'ui.router',
])
.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('/', {
		url: '/',
		templateUrl: 'modules/main/main.html',
		controller: 'mainCtrl',
	})
	.state('/home', {
		templateUrl: 'modules/main/main.html',
		controller: 'mainCtrl',
	})

});
