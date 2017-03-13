(function() {
	'use strict';
	target.controller('videosCtrl', videosCtrl)
	videosCtrl.$injector = ['$scope'];

	function videosCtrl($scope) {
		
		$scope.videos = [
			{
				id:1,
				title:'video1',
				type: 'academy',
				url: 'https://www.youtube.com/watch?v=N7TkK2joi4I',
				thumb: 'https://i.ytimg.com/vi/khrAhOrSZQc/1.jpg'
			},
			{
				id:2,
				title:'video2',
				type: 'academy',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Kamp_Alexisdorf_3.jpg',
				thumb: 'https://i.ytimg.com/vi/khrAhOrSZQc/1.jpg'
			},
			{
				id:3,
				title:'video3',
				type: 'union',
				url: 'https://www.youtube.com/watch?v=N7TkK2joi4I',
				thumb: 'https://i.ytimg.com/vi/khrAhOrSZQc/1.jpg'
			},
			{
				id:4,
				title:'video4',
				type: 'traning',
				url: 'https://www.youtube.com/watch?v=N7TkK2joi4I',
				thumb: 'https://i.ytimg.com/vi/N7TkK2joi4I/1.jpg'
			},
			{
				id:5,
				title:'video5',
				type: 'traning',
				url: 'https://www.youtube.com/watch?v=N7TkK2joi4I',
				thumb: 'https://i.ytimg.com/vi/N7TkK2joi4I/1.jpg'
			},
		];
	}
})();
