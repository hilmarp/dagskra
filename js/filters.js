(function() {

	var appFilters = angular.module('dagskraFilters', []);

	// Linkur kemur frá API sem /tv/ruv, breyta í /#/ruv
	appFilters.filter('removeTvFromLink', function() {
		return function(input) {
			return input.replace('/tv/', '/#/');
		};
	});

})();