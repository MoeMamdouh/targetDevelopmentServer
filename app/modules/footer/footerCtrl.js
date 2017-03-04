(function() {
	'use strict';
	target.controller('footerCtrl', footerCtrl)
	footerCtrl.$injector = ['$scope'];

	function footerCtrl($scope) {
		$scope.appYear	 = config.appYear;
		$scope.appName 	= config.appName;
		$scope.Do 		= Do.Do;
		$scope.DoUrl 	= Do.DoUrl;
	}
})();
