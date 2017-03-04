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
	.state('Main.news', {
		url: '/news',
		views: {
			'container@': {
				templateUrl: 'modules/news/news.html',
				controller: 'newsCtrl',
			}
		}
	})
	.state('Main.gallery', {
		url: '/gallery',
		views: {
			'container@': {
				templateUrl: 'modules/gallery/gallery.html',
				controller: 'galleryCtrl',
			}
		}
	})
	.state('Main.videos', {
		url: '/videos',
		views: {
			'container@': {
				templateUrl: 'modules/videos/videos.html',
				controller: 'videosCtrl',
			}
		}
	})
	.state('Main.schedules', {
		url: '/schedules',
		views: {
			'container@': {
				templateUrl: 'modules/schedules/schedules.html',
				controller: 'schedulesCtrl',
			}
		}
	})
	.state('Main.shops', {
		url: '/shops',
		views: {
			'container@': {
				templateUrl: 'modules/shops/shops.html',
				controller: 'shopsCtrl',
			}
		}
	})
	.state('Main.mail', {
		url: '/mail',
		views: {
			'container@': {
				templateUrl: 'modules/mail/mail.html',
				controller: 'mailCtrl',
			}
		}
	})
});