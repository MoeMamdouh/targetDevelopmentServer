(function() {
	'use strict';
	target.controller('bannerCtrl', bannerCtrl)
	bannerCtrl.$injector = ['$scope'];

	function bannerCtrl($scope) {
		$scope.state = 'home'
		$scope.openItem = function(item) {
			console.log(item)
			$scope.state = item
		}
	}
})();
