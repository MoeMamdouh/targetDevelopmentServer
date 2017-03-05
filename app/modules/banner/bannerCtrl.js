(function() {
	'use strict';
	target.controller('bannerCtrl', bannerCtrl)
	bannerCtrl.$injector = ['$scope', 'doStates'];

	function bannerCtrl($scope, doStates) {
		$scope.logo = config.logo;
		$scope.menus = config.menu;
		$scope.selectedMenuItem = getStartedMenuObject();
		//functions
		$scope.menuItemClicked = menuItemClicked;


		
		
		function getStartedMenuObject() {
			//get state name
			var stateModule = doStates.getStateModule();
			$scope.selectedMenuItem = _.findWhere($scope.menus, {name: stateModule});
			return $scope.selectedMenuItem
		}
		function menuItemClicked(menuItem) {
			console.log('menuItem', menuItem)
			$scope.selectedMenuItem = menuItem;
			var state = 'Main.' + $scope.selectedMenuItem.name;
			doStates.goState(state);
		}
	}
})();
