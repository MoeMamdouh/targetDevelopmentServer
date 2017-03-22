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

		];
	$scope.images = [
			{
				id:1,
				title:'Curabitur non blandit justo',
				url: 'images/r1.jpg',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:2,
				title:'Curabitur non blandit justo',
				url: 'images/r2.jpg',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:3,
				title:'Curabitur non blandit justo',
				url: 'images/r3.jpg',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
		];
		$scope.Teames = [
			{
				id:1,
				social1:'https://www.facebook.com/',
				social2:'https://twitter.com/',
				social3:'https://google.com/',
				title1: 'Mohamed',
				title2: 'Shabana',
                url: 'images/t2.jpg',			
			},
			{
				id:2,
				social1:'https://www.facebook.com/',
				social2:'https://twitter.com/',
				social3:'https://google.com/',
				title1: 'Mohamed',
				title2: 'Shorpgy',
				url: 'images/t3.jpg',			
			},			

			{
				id:3,
				social1:'https://www.facebook.com/',
				social2:'https://twitter.com/',
				social3:'https://google.com/',
				title1: 'Ramy',
				title2: 'Ashor',
				url: 'images/t4.jpg',			
			},
		];
		console.log('The End Brac')
	}
})();
