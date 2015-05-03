(function() {

	var appFilters = angular.module('dagskraFilters', []);

	// Linkur kemur frá API sem /tv/ruv, breyta í /#/ruv
	appFilters.filter('channelLink', function() {
		return function(input) {
			return input.replace('/tv/', '#/');
		};
	});

	// Formatta tímann
	appFilters.filter('showStart', function() {
		return function(input) {
			return input.substring(11, 16);
		};
	});

	// Ef þáttur er Live
	appFilters.filter('isLive', function() {
		return function(input) {
			if (input) {
				return 'Bein útsending';
			}
		};
	});

	// Aspect ratio með tvípunkti
	appFilters.filter('aspectRatio', function() {
		return function(input) {
			return input.replace('/', ':');
		};
	});

	// Capitalize fyrsta staf
	appFilters.filter('capitalize', function() {
		return function(input) {
			return input.charAt(0).toUpperCase() + input.slice(1);
		};
	});

})();