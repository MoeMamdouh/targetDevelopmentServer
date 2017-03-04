(function() {
	'use strict';
	target.controller('newsCtrl', newsCtrl)
	newsCtrl.$injector = ['$scope'];

	function newsCtrl($scope) {
      	console.log('about Ctrl')
	}
})();
