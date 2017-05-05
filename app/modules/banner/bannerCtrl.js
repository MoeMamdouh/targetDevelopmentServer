(function() {
	'use strict';
	target.controller('bannerCtrl', bannerCtrl)
	bannerCtrl.$injector = ['$scope', 'doStates', '$state'];

	function bannerCtrl($scope, doStates, $state) {
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
			// console.log('menuItem', menuItem)
			$scope.selectedMenuItem = menuItem;
			// var state = $scope.selectedMenuItem.name;
			var state = 'Main.' + $scope.selectedMenuItem.name;
			doStates.goState(state);
			// $state.go(state)
		}
		
		(function($){
			$(".menu-icon").on("click", function(){
				$(this).toggleClass("open");
				$(".container").toggleClass("nav-open");
				$("nav ul li").toggleClass("animate");
			});
			
		})(jQuery);
	}
})();
