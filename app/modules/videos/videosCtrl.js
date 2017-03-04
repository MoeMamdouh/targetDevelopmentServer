(function() {
	'use strict';
	target.controller('videosCtrl', videosCtrl)
	videosCtrl.$injector = ['$scope'];

	function videosCtrl($scope) {
      	console.log('about Ctrl')
	}
})();
