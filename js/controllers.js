(function() {

	var appControllers = angular.module('dagskraControllers', []);

	appControllers.controller('ChannelController', ['$scope', '$routeParams', 'Channel', function($scope, $routeParams, Channel) {
		// Ná í dagskrá RÚV
		Channel.get({channel: $routeParams.channel}, function(channel) {
			$scope.dagskra = channel.results;
		});
	}]);		

})();