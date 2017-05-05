(function() {
	'use strict';
	target.controller('mailCtrl', mailCtrl)
	mailCtrl.$injector = ['$scope'];

	function mailCtrl($scope) {
      	$scope.sendMail = sendMail;
		
		function sendMail(Name, Email, Telephone, Message) {

			var targetMail = 'targetMail@yahoo.com';
			var subject = Name;
			var body = 
			'Name : '+ Name + '\n\n' + 
			'Telephone : '+ Telephone + '\n\n' + 
			'EMAIL : '+ Email + '\n\n\n\n' + 
			'Message : '+ Message + '\n';
			console.log(body)

			window.open('mailto:'+ targetMail +'?subject=' + subject +'&body=' + body );
		}
	}
})();
