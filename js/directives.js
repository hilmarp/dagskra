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

	// Breyta + í - þegar lýsing er opnuð
	appDirectives.directive('collapseToggle', function() {
		return {
			restrict: 'A',
			link: function(scope, el, attrs) {
				$(el).on('hide.bs.collapse', function() {
					$(this).prev('span').children('.btn-see-more').text('+');
				});

				$(el).on('show.bs.collapse', function() {
					$(this).prev('span').children('.btn-see-more').text('-');
				});
			}
		};
	});

})();