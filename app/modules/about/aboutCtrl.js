(function() {
	'use strict';
	target.controller('aboutCtrl', aboutCtrl)
	aboutCtrl.$injector = ['$scope'];

	function aboutCtrl($scope) {
      	console.log('about Ctrl')
	}
})();
