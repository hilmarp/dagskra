(function() {

	var appDirectives = angular.module('dagskraDirectives', []);

	appDirectives.directive('headerNav', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/navbar.html'
		};
	});

	appDirectives.directive('channelList', ['$routeParams', function($routeParams) {
		return {
			restrict: 'E',
			templateUrl: 'partials/channel-list.html'
		};
	}]);

})();