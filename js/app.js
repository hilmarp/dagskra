(function() {

	var app = angular.module('dagskra', ['ngRoute', 'dagskraControllers', 'dagskraServices', 'dagskraDirectives', 'dagskraFilters']);

	// Routing
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/:channel', {
				templateUrl: 'partials/tv-guide.html',
				controller: 'ChannelController'
			})
			.otherwise({
				redirectTo: '/ruv'
			});

		// HTML5Mode til að taka # úr URL
		// $locationProvider.html5Mode(true);
	}]);

})();