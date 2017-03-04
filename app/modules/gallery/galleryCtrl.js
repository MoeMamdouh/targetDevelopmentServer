(function() {
	'use strict';
	target.controller('galleryCtrl', galleryCtrl)
	galleryCtrl.$injector = ['$scope'];

	function galleryCtrl($scope) {
      	console.log('about Ctrl')
	}
})();
