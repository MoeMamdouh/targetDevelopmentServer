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

		$scope.slides = [
			{name: 'Not my cat.', url: 'https://farm2.staticflickr.com/1318/5114665665_e55b2c2169_n.jpg'},
			{name: 'Again, not my cat.', url: 'https://farm2.staticflickr.com/1079/901626554_8bc51ec160_n.jpg'}
		]
		$scope.newses = [
			{
				id:1,
				url: 'images/r1.jpg',
				title: 'Nullam tristique faucibus',
				description: 'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:2,
				url: 'images/r2.jpg',
				title: 'Ut ultricies, dui a tincidunt',
				description: 'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:3,
				url: 'images/r3.jpg',
				title: 'Curabitur non blandit justo',
				description: 'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
		]

		$scope.slider = [
			{
				id:1,
				title: 'Extreme mountain bike enthusiasts',
				description: 'Mauris mollis, libero id ornare condimentum, erat mi iaculis libero, bibendum dictum leo tortor a magna. Aenean porta non nunc in semper. Fusce eget tempus metus, sit amet posuere lectus. Morbi cursus ante a felis ultrices scelerisque. Nullam cursus odio est, in pellentesque neque elementum nec. Pellentesque a egestas erat.',
			},
			{
				id:2,
				title: 'Enjoy every moment of triathlon training',
				description: 'Nullam tristique faucibus pharetra. Ut ultricies, dui a tincidunt placerat, urna augue pellentesque leo, et posuere velit neque quis justo. Vivamus vel nulla vel tellus pretium maximus. Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
			},
			{
				id:3,
				title: 'We are committed to develop the sport of triathlon',
				description: 'Donec viverra enim nunc, sit amet ultricies dolor placerat vestibulum. Donec id dapibus dolor. Praesent elementum ipsum fringilla ullamcorper facilisis. Morbi blandit tortor molestie ex dignissim, vitae blandit metus ullamcorper. Praesent eleifend risus quam, et aliquet eros tristique a. Duis rhoncus auctor urna, id tristique quam gravida in. ',
			},
		]


		  $scope.$on('$viewContentLoaded', function(){
			//Here your view content is fully loaded !!
			$('.jarallax').jarallax({
				speed: 0.5,
				imgWidth: 1366,
				imgHeight: 768
			})

			$("#slider3").responsiveSlides({
				auto: true,
				pager:false,
				nav:false,
				speed: 500,
				namespace: "callbacks",
				before: function () {
					$('.events').append("<li>before event fired.</li>");
				},
				after: function () {
					$('.events').append("<li>after event fired.</li>");
				}
			});
									
			// Slideshow 4
			$("#slider4").responsiveSlides({
				auto: true,
				pager:true,
				nav:false,
				speed: 500,
				namespace: "callbacks",
				before: function () {
				$('.events').append("<li>before event fired.</li>");
				},
				after: function () {
				$('.events').append("<li>after event fired.</li>");
				}
			});
		});
	}
})();
