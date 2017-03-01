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
	$urlRouterProvider.otherwise('home');
	$stateProvider
	.state('Main', {
		views: {
			'banner': {
				templateUrl: 'modules/banner/banner.html',
				controller: 'bannerCtrl',
			},
			'footer': {
				templateUrl: 'modules/footer/footer.html',
				controller: 'footerCtrl',
			}
		},
		url: '',
		abstract: true,
	})
	.state('Main.home', {
		url: '/home',
		views: {
			'container@': {
				templateUrl: 'modules/home/home.html',
				controller: 'homeCtrl',
			}
		}
	})
	.state('Main.about', {
		url: '/about',
		views: {
			'container@': {
				templateUrl: 'modules/about/about.html',
				controller: 'aboutCtrl',
			}
		}
	})
});