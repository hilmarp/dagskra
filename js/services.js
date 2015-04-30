(function() {

	var appServices = angular.module('dagskraServices', ['ngResource']);

	// Channels: RUV, RUVITHROTTIR, STOD2, STOD2SPORT,
	// 			 STOD2SPORT2, STOD2GULL, STOD2BIO,
	//			 STOD3, SKJAR1
	appServices.factory('Channel', ['$resource', function($resource){
		return $resource('http://apis.is/tv/:channel', {channel: '@channel'});
	}]);	

})();