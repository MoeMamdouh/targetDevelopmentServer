(function() {
	'use strict';
	target.controller('bannerCtrl', bannerCtrl)
	bannerCtrl.$injector = ['$scope', 'doStates'];

	function bannerCtrl($scope, doStates) {
		$scope.menus = config.menu;
		$scope.selectedMenuItem = $scope.menus[0]
		
		$scope.menuItemClicked = function(menuItem) {
			$scope.selectedMenuItem = menuItem;
			var state = 'Main.' + $scope.selectedMenuItem.name;
			doStates.goState(state);
		}
	}
})();
