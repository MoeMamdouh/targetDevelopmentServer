(function() {
	'use strict';
	target.controller('mailCtrl', mailCtrl)
	mailCtrl.$injector = ['$scope'];

	function mailCtrl($scope) {
      	console.log('about Ctrl')
	}
})();
