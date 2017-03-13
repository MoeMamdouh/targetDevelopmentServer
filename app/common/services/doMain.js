
(function () {
	"use strict";
	target.factory("doMain", doMain)

	doMain.$inject = ['$timeout', '$state', '$rootScope'];

	function doMain($timeout, $state, $rootScope) {
		var returnedData = {};
		
		function findFromWhereAttr (from, where, attr) {
			return _.pluck( _.where(from, where), attr)
		}
		/**
		 * add default property to all array object
		 * @param {*} data 
		 * @param {*} obj 
		 */
		function addDefaultAttr (data, obj) {
			var newArr = _.map(data, function(element) {
				return _.extend({}, element, obj);
			});
			return newArr;
		}

		returnedData.findFromWhereAttr 	= findFromWhereAttr;
		returnedData.addDefaultAttr 	= addDefaultAttr;
	
		return returnedData;
	}

})();