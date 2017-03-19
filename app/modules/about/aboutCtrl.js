(function() {
	'use strict';
	target.controller('aboutCtrl', aboutCtrl)
	aboutCtrl.$injector = ['$scope'];

	function aboutCtrl($scope) {
      	console.log('Yes We Can :D')
	$scope.services = [
			{
				id:1,
				icon: 'fa fa-user',
				title: 'Suspendisse ornare vitae ex nec aliquam',
				description: 'Nunc et massa ut purus porta euismod quis eu erat. Nam ornare faucibus elit sed tempor. Quisque iaculis odio nibh, et auctor tellus rhoncus vel. Maecenas arcu neque, semper eu commodo ut, pharetra vitae erat.',
			},
			{
				id:2,
				icon: 'fa fa-cogs',
				title: 'Suspendisse ornare vitae ex nec aliquam',
				description: 'Nunc et massa ut purus porta euismod quis eu erat. Nam ornare faucibus elit sed tempor. Quisque iaculis odio nibh, et auctor tellus rhoncus vel. Maecenas arcu neque, semper eu commodo ut, pharetra vitae erat.',
			},
			{
				id:3,
				icon: 'fa fa-thumbs-o-up',
				title: 'Suspendisse ornare vitae ex nec aliquam',
				description: 'Nunc et massa ut purus porta euismod quis eu erat. Nam ornare faucibus elit sed tempor. Quisque iaculis odio nibh, et auctor tellus rhoncus vel. Maecenas arcu neque, semper eu commodo ut, pharetra vitae erat.',
			},

		]
		console.log('The End Brac')
	}
})();
