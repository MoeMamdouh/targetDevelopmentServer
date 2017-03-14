(function() {
	'use strict';
	target.controller('galleryCtrl', galleryCtrl)
	galleryCtrl.$injector = ['$scope', '$timeout'];

	function galleryCtrl($scope, $timeout) {

		window.onload=(function(){
			var $gallery = $('.gallery a').simpleLightbox();
			$gallery.on('show.simplelightbox', function(){
				console.log('Requested for showing');
			})
			.on('shown.simplelightbox', function(){
				console.log('Shown');
			})
			.on('close.simplelightbox', function(){
				console.log('Requested for closing');
			})
			.on('closed.simplelightbox', function(){
				console.log('Closed');
			})
			.on('change.simplelightbox', function(){
				console.log('Requested for change');
			})
			.on('next.simplelightbox', function(){
				console.log('Requested for next');
			})
			.on('prev.simplelightbox', function(){
				console.log('Requested for prev');
			})
			.on('nextImageLoaded.simplelightbox', function(){
				console.log('Next image loaded');
			})
			.on('prevImageLoaded.simplelightbox', function(){
				console.log('Prev image loaded');
			})
			.on('changed.simplelightbox', function(){
				console.log('Image changed');
			})
			.on('nextDone.simplelightbox', function(){
				console.log('Image changed to next');
			})
			.on('prevDone.simplelightbox', function(){
				console.log('Image changed to prev');
			})
			.on('error.simplelightbox', function(e){
				console.log('No image found, go to the next/prev');
				console.log(e);
			});
		})
		$scope.images = [
			{
				id:1,
				title:'Maecenas aliquam nec arcu at efficitur. Praesent cursus aliquam erat a commodo.',
				group: 'academy',
				url: 'images/g1.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:2,
				title:'image2',
				group: 'academy',
				url: 'images/g2.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:3,
				title:'image3',
				group: 'union',
				url: 'images/g3.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:4,
				title:'image4',
				group: 'traning',
				url: 'images/g4.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:5,
				title:'image5',
				group: 'traning',
				url: 'images/g5.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:6,
				title:'image6',
				group: 'traning',
				url: 'images/g6.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:7,
				title:'image7',
				group: 'traning',
				url: 'images/g7.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:8,
				title:'image8',
				group: 'traning',
				url: 'images/g8.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:9,
				title:'image9',
				group: 'traning',
				url: 'images/g9.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:10,
				title:'image5',
				group: 'traning',
				url: 'images/g5.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:11,
				title:'image5',
				group: 'traning',
				url: 'images/g5.jpg',
				thumb: '',
				desc:'',
			},
			{
				id:12,
				title:'image5',
				group: 'traning',
				url: 'images/g5.jpg',
				thumb: '',
				desc:'',
			},
		];
	}
})();
