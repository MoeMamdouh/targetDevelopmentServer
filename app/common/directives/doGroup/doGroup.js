(function(){
	'use strict';
	target.directive('doGroup' , doGroup)

	function doGroup(Lightbox){
		return {
			replace: true,
			restrict:'E',
			templateUrl:'common/directives/doGroup/doGroup.html',
			scope:{ data:"=" },
			link: function ($scope, iElement, iAttrs) {

				$scope.groups = _.groupBy( $scope.data, 'type');

				console.log('groups ', $scope.groups)

				$scope.openLightboxModal = function (groub, index) {
					console.log('groub ', groub)
					Lightbox.openModal(groub, index);
				};
				
				
			}
		}
	}
})();