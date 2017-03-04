
(function () {
	"use strict";
	target.factory("doStates", doStates)

	doStates.$inject = ['$timeout', '$state', '$rootScope'];

	function doStates($timeout, $state, $rootScope) {
		var returnedData = {};

		function getStateName() {
			return $state.current.name;
		}
		function getViewName() {
			var stateViews = _.keys($state.current.views)
			return stateViews[0];
		}
		function goState(state, time, reload) {
			time = time || 0;
			$timeout(function() {
				$state.go(state, {} , {reload:reload});
			}, time);
		}

		// function goPage (id , time) {
		// 	$timeout(function() {
		// 		$state.go('main.page', {id:id});
		// 	}, time);
		// }

		returnedData.getStateName   = getStateName;
		returnedData.getViewName    = getViewName;
		returnedData.goState        = goState;
	
		return returnedData;
	}

})();