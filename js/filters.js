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

	// Formatta lengd
	appFilters.filter('duration', function() {
		return function(input) {
			// 365, 0:35
			if (input.indexOf(':') === 1) {
				var beforeColon = input.substring(0, input.indexOf(':')),
					afterColon = input.substring(input.indexOf(':') + 1);

				// Ef 1:15, annars 0:15
				if (parseInt(beforeColon, 10) > 0) {
					if (afterColon.charAt(0) === '0') {
						return beforeColon + ' klst. og ' + afterColon.substring(1) + ' mín.';
					} else {
						return beforeColon + ' klst. og ' + afterColon + ' mín.';
					}
				} else {
					if (afterColon.charAt(0) === '0') {
						return afterColon.substring(1) + ' mín.';
					} else {
						return afterColon + ' mín.';
					}
				}
			// RÚV og Skjár 1, 00:35:00
			} else if (input.indexOf(':') === 2) {
				var first = input.substring(0, input.indexOf(':')),
					middle = input.substring(input.indexOf(':') + 1, input.lastIndexOf(':')),
					last = input.substring(input.lastIndexOf(':') + 1);

				// Ef 02:00:00, annars 00:10:00
				if (parseInt(first, 10) > 0) {
					// Ef 02, annars 10
					if (first.charAt(0) === '0') {
						if (middle.charAt(0) === '0') {
							return first.substring(1) + ' klst. og ' + middle.substring(1) + ' mín.';
						} else {
							return first.substring(1) + ' klst. og ' + middle + ' mín.';
						}
					} else {
						return first + ' klst. og ' + middle + ' mín.';
					}
				} else {
					if (middle.charAt(0) === '0') {
						return middle.substring(1) + ' mín.';
					} else {
						return middle + ' mín.';
					}
				}

				return input;
			} else {
				return input;
			}
		};
	});

})();