(function() {
	'use strict';
	target.controller('shopsCtrl', shopsCtrl)
	shopsCtrl.$injector = ['$scope'];

	function shopsCtrl($scope) {
      	console.log('about Ctrl')
	$scope.shops = [
			{
				id:1,
				title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo ullamcorper aliquet. Proin est orci, suscipit aliquet cursus ut, iaculis a metus.',
				url: 'images/tr1.jpg',
				shop_url: 'https://www.sportsdirect.com/stores',
				desc:'Aliquam dictum dui vitae leo dignissim volutpat. Etiam ultrices eget ex ut malesuada. Donec imperdiet sem quis neque dignissim, et congue felis ullamcorper. Donec vel accumsan odio. Quisque ut tortor aliquet est rutrum laoreet. Nullam sit amet lectus et leo efficitur auctor vitae sit amet metus. Aliquam pharetra gravida placerat. Sed mollis tortor tincidunt elit cursus convallis. Mauris in lacinia lectus. Duis vehicula varius quam, et rutrum turpis semper quis. Nullam rhoncus enim dui, at condimentum lectus commodo eu.',
			},
			{
				id:1,
				title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo ullamcorper aliquet. Proin est orci, suscipit aliquet cursus ut, iaculis a metus.',
				url: 'images/tr3.jpg',
				shop_url: 'https://www.sportsdirect.com/stores',
				desc:'Aliquam dictum dui vitae leo dignissim volutpat. Etiam ultrices eget ex ut malesuada. Donec imperdiet sem quis neque dignissim, et congue felis ullamcorper. Donec vel accumsan odio. Quisque ut tortor aliquet est rutrum laoreet. Nullam sit amet lectus et leo efficitur auctor vitae sit amet metus. Aliquam pharetra gravida placerat. Sed mollis tortor tincidunt elit cursus convallis. Mauris in lacinia lectus. Duis vehicula varius quam, et rutrum turpis semper quis. Nullam rhoncus enim dui, at condimentum lectus commodo eu.',
			},
			{
				id:1,
				title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo ullamcorper aliquet. Proin est orci, suscipit aliquet cursus ut, iaculis a metus.',
				url: 'images/tr4.jpg',
				shop_url: 'https://www.sportsdirect.com/stores',
				desc:'Aliquam dictum dui vitae leo dignissim volutpat. Etiam ultrices eget ex ut malesuada. Donec imperdiet sem quis neque dignissim, et congue felis ullamcorper. Donec vel accumsan odio. Quisque ut tortor aliquet est rutrum laoreet. Nullam sit amet lectus et leo efficitur auctor vitae sit amet metus. Aliquam pharetra gravida placerat. Sed mollis tortor tincidunt elit cursus convallis. Mauris in lacinia lectus. Duis vehicula varius quam, et rutrum turpis semper quis. Nullam rhoncus enim dui, at condimentum lectus commodo eu.',
			},
		];	  
	}
})();
