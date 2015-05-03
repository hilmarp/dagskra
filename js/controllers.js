(function() {

	var appControllers = angular.module('dagskraControllers', []);

	appControllers.controller('ChannelListController', ['$scope', 'Channel', function($scope, Channel){
		var channels = null;

		// Ná í allar stöðvar
		Channel.get({}, function(channel) {
			channels = channel.results[0].channels;

			// Stöð 2 kemur tvisvar, seinna Stöð 2 á að vera Stöð 3
			channels[7].name = 'Stöð 3';

			$scope.channels = channels;
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
			$scope.schedule = channel.results;
		});
	}]);

	appControllers.controller('ThemeController', ['$scope', function($scope){
		// Default theme
		$scope.themeName = 'darkly';

		$scope.themes = ['darkly', 'flatly', 'slate', 'superhero', 'united'];

		$scope.changeTheme = function(newThemeName) {
			$scope.themeName = newThemeName;
		}
	}]);		

})();