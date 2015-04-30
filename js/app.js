(function() {

	var app = angular.module('dagskra', ['dagskraControllers', 'dagskraServices', 'ngRoute']);

	// Routing
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/:channel', {
				templateUrl: 'partials/tv-guide.html',
				controller: 'ChannelController'
			})
			.otherwise({
				redirectTo: '/ruv'
			});
	}]);

})();