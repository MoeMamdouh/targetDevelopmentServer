(function() {
	'use strict';
	target.controller('homeCtrl', homeCtrl)
	homeCtrl.$injector = ['$scope'];

	function homeCtrl($scope) {
		$scope.services = [
			{
				id:1,
				icon: 'fa fa-thumbs-up',
				title: 'Praesent tempor purus',
				description: 'Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie, ipsum velit mattis nibh, id congue lacus lorem a elit.',
			},
			{
				id:2,
				icon: 'fa fa-bolt',
				title: 'Service 2',
				description: 'Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie, ipsum velit mattis nibh, id congue lacus lorem a elit.',
			},
			{
				id:3,
				icon: 'fa fa-cog',
				title: 'Service 3',
				description: 'Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie, ipsum velit mattis nibh, id congue lacus lorem a elit.',
			},
			{
				id:4,
				icon: 'fa fa-hand-peace-o',
				title: 'Service 4',
				description: 'Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie, ipsum velit mattis nibh, id congue lacus lorem a elit.',
			},
		]
	}
})();
