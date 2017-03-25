(function(){
	'use strict';
	target.directive('doGroup' , doGroup)

	function doGroup(Lightbox){
		return {
			//replace: true,
			restrict:'E',
			templateUrl:'common/directives/doGroup/doGroup.html',
			scope:{
				data:"=",
				type:"@"
			},
			link: function ($scope, iElement, iAttrs) {
				$scope.groups = _.groupBy( $scope.data, 'group');

				// console.log('groups ', $scope.groups, $scope.type)
				$scope.openLightboxModal = function (groub, index) {
					console.log('groub ', groub)
					Lightbox.openModal(groub, index);
				};

				$scope.split = function(array, checnkLength) {
					console.log(' split_news ', array)
					var split_news = _.groupBy(array, function(element, index){
						return Math.floor(index/checnkLength);
					}); 
					console.log(' split_news ', split_news)
					return split_news;
				}
			}
		}
	}
})();