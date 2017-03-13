(function() {
	'use strict';
	target.controller('videosCtrl', videosCtrl)
	videosCtrl.$injector = ['$scope', 'doMain'];

	function videosCtrl($scope, doMain) {
		
		$scope.videos = [
			{
				id:1,
				title:'video1',
				group: 'academy',
				url: 'https://www.youtube.com/watch?v=HRDG6np1GlA',
				thumb: 'https://i.ytimg.com/vi/khrAhOrSZQc/1.jpg'
			},
			{
				id:2,
				title:'video2',
				group: 'academy',
				url: 'https://www.youtube.com/watch?v=N7TkK2joi4I',
				thumb: 'https://i.ytimg.com/vi/khrAhOrSZQc/1.jpg'
			},
			{
				id:3,
				title:'video3',
				group: 'union',
				url: 'https://www.youtube.com/watch?v=N7TkK2joi4I',
				thumb: 'https://i.ytimg.com/vi/khrAhOrSZQc/1.jpg'
			},
			{
				id:4,
				title:'video4',
				group: 'traning',
				url: 'https://www.youtube.com/watch?v=N7TkK2joi4I',
				thumb: 'https://i.ytimg.com/vi/N7TkK2joi4I/1.jpg'
			},
			{
				id:5,
				title:'video5',
				group: 'traning',
				url: 'https://www.youtube.com/watch?v=HRDG6np1GlA',
				thumb: 'https://i.ytimg.com/vi/N7TkK2joi4I/1.jpg'
			},
		];

		//inject type property with 'video' to all array objects
		$scope.videos = doMain.addDefaultAttr($scope.videos, {type:'video'})
	}
})();
