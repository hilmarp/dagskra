(function() {

	var app = angular.module('dagskraControllers', []);

	app.controller('RuvController', ['$scope', '$http', function($scope, $http) {
		// Ná í dagskrá RÚV
		var _this = this;
		_this.dagskra = [];

		$http.get('http://apis.is/tv/ruv').success(function(data) {
			_this.dagskra = data.results;
			console.log(data);
		});
	}]);		

})();