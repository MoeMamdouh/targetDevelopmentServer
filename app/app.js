'use strict';

var commonDir = 'common';
var directivesDir = commonDir + '/directives';
var filtersDir = commonDir + '/filters';
var servicesDir = commonDir + '/services';
var target = angular.module('target', [
	'ngResource',
	'ngRoute',
])
.config(function ($routeProvider) {
$routeProvider
	.when('/test', {
	templateUrl: 'modules/main/main.html',
	controller: 'mainCtrl',
	})
	.otherwise({
	redirectTo: '/test'
	});
});
