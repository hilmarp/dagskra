(function() {

	var appControllers = angular.module('dagskraControllers', []);

	appControllers.controller('ChannelListController', ['$scope', 'Channel', function($scope, Channel){
		// Ná í allar stöðvar
		Channel.get({}, function(channel) {
			$scope.channels = channel.results[0].channels;
		});

		// Finna út hvaða stöð er valin, fyrir active class
		var selChannel = 'Rúv';

		$scope.setChannel = function(channel) {
			selChannel = channel;
		}

		$scope.isChannel = function(channel) {
			return selChannel === channel;
		}
	}]);

	appControllers.controller('ChannelController', ['$scope', '$routeParams', 'Channel', function($scope, $routeParams, Channel) {
		// Ná í dagskrá fyrir :channel
		Channel.get({channel: $routeParams.channel}, function(channel) {
			$scope.dagskra = channel.results;
		});
	}]);		

})();