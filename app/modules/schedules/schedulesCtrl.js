(function() {
	'use strict';
	target.controller('schedulesCtrl', schedulesCtrl)
	schedulesCtrl.$injector = ['$scope'];

	function schedulesCtrl($scope) {
		   $scope.monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
	}
})();
