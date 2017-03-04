(function() {
	'use strict';
	target.controller('shopsCtrl', shopsCtrl)
	shopsCtrl.$injector = ['$scope'];

	function shopsCtrl($scope) {
      	console.log('about Ctrl')
	}
})();
