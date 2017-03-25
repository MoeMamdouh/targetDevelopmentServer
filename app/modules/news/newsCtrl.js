(function() {
	'use strict';
	target.controller('newsCtrl', newsCtrl)
	newsCtrl.$injector = ['$scope'];

	function newsCtrl($scope) {
	  	$scope.news = [
			{
				id:1,
				title:'Curabitur non blandit justo',
				url: 'images/r1.jpg',
				group: 'academy',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:2,
				title:'Curabitur non blandit justo',
				url: 'images/r2.jpg',
				group: 'academy',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:3,
				title:'Curabitur non blandit justo',
				url: 'images/r3.jpg',
				group: 'academy',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:1,
				title:'Curabitur non blandit justo',
				url: 'images/r1.jpg',
				group: 'academy',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:2,
				title:'Curabitur non blandit justo',
				url: 'images/r2.jpg',
				group: 'academy',
				group: 'academy',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:3,
				title:'Curabitur non blandit justo',
				url: 'images/r3.jpg',
				group: 'academy',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
				{
				id:1,
				title:'Curabitur non blandit justo',
				url: 'images/r1.jpg',
				group: 'union',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:2,
				title:'Curabitur non blandit justo',
				url: 'images/r2.jpg',
				group: 'union',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
			{
				id:3,
				title:'Curabitur non blandit justo',
				url: 'images/r3.jpg',
				group: 'union',
				desc:'Pellentesque auctor euismod lectus a pretium. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.nascetur ridiculus mus. Curabitur ut elit at est tempus volutpat.',
			},
		];

		// var checnkLength = 3
		// $scope.split_news = _.groupBy(images, function(element, index){
		// 	return Math.floor(index/checnkLength);
		// }); 
		// console.log('$scope.split_news ', $scope.split_news)
	}
})();
