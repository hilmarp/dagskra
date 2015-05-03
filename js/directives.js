(function() {

	var appDirectives = angular.module('dagskraDirectives', []);

	// Navigation efst
	appDirectives.directive('headerNav', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/navbar.html',
			link: function(scope, el, attr) {
				scope.showLength = false;
				scope.showSeries = false;
				scope.showAspectRatio = false;
			}
		};
	});

	// Stöðvarlistinn
	appDirectives.directive('channelList', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/channel-list.html'
		};
	});

	// Footer, info um höfund
	appDirectives.directive('footerInfo', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/footer-info.html'
		}
	});

})();