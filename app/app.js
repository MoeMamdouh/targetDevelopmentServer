'use strict';

var commonDir = 'common';
var directivesDir = commonDir + '/directives';
var filtersDir = commonDir + '/filters';
var servicesDir = commonDir + '/services';
var target = angular.module('target', [
	'ngResource',
	'ui.router',
	'bootstrapLightbox',
	'ngMaterial',
	
])
.run(function($rootScope) {
	$rootScope.appYear	 = config.appYear;
	$rootScope.appName 	= config.appName;
	$rootScope.Do 		= Do.Do;
	$rootScope.DoUrl 	= Do.DoUrl;
})
.config(function ($stateProvider, $urlRouterProvider) {
	//$urlRouterProvider.otherwise('home');

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
		abstract: true,
	})

	.state('Main.home', {
		url: '/home',
		module: 'home',
		views: {
			'container@': {
				templateUrl: 'modules/home/home.html',
				controller: 'homeCtrl',
			}
		}
	})
	
	.state('Main.about', {
		url: '/about',
		module: 'about',
		views: {
			'container@': {
				templateUrl: 'modules/about/about.html',
				controller: 'aboutCtrl',
			}
		}
	})
	.state('Main.news', {
		url: '/news',
		module: 'news',
		views: {
			'container@': {
				templateUrl: 'modules/news/news.html',
				controller: 'newsCtrl',
			}
		}
	})
	.state('Main.gallery', {
		url: '/gallery',
		module: 'gallery',
		views: {
			'container@': {
				templateUrl: 'modules/gallery/gallery.html',
				controller: 'galleryCtrl',
			}
		}
	})
	.state('Main.videos', {
		url: '/videos',
		module: 'videos',
		views: {
			'container@': {
				templateUrl: 'modules/videos/videos.html',
				controller: 'videosCtrl',
			}
		}
	})
	.state('Main.schedules', {
		url: '/schedules',
		module: 'schedules',
		views: {
			'container@': {
				templateUrl: 'modules/schedules/schedules.html',
				controller: 'schedulesCtrl',
			}
		}
	})
	.state('Main.shops', {
		url: '/shops',
		module: 'shops',
		views: {
			'container@': {
				templateUrl: 'modules/shops/shops.html',
				controller: 'shopsCtrl',
			}
		}
	})
	.state('Main.mail', {
		url: '/mail',
		module: 'mail',
		views: {
			'container@': {
				templateUrl: 'modules/mail/mail.html',
				controller: 'mailCtrl',
			}
		}
	})
});