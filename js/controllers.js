(function() {

	var appControllers = angular.module('dagskraControllers', []);

	appControllers.controller('ChannelController', ['$scope', '$routeParams', 'Channel', function($scope, $routeParams, Channel) {
		// Ná í dagskrá fyrir :channel
		Channel.get({channel: $routeParams.channel}, function(channel) {
			$scope.dagskra = channel.results;
		});
	}]);		

})();