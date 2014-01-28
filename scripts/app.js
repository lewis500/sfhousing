var app = angular.module('lineApp', []);

app.controller('mainCtrl',["$scope", "data", function($scope, dat){

	$scope.date = { val: new Date("2013-01-01")};

	var cityNames = dat.cityNames;

	$scope.cityNamesLoop = cityNames.map(function(d){
		return{
			name: d
		};
	});

	dat.permits;

	dat.prices;

	$scope.color = 	d3.scale.category10()
			.domain(cityNames);

	$scope.specs = {
		prices: {
			ydomain: [0,700000],
			format: d3.format("$.3s") ,
			data: dat.prices
		}
		, permits: {
			ydomain: [0,7000],
			format: d3.format(".2s"),
			data: dat.permits
		}
	};

}]);