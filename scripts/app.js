var app = angular.module('lineApp', []);

app.controller('mainCtrl',["$scope", "data", function($scope, dat){

	$scope.date = { val: new Date("2013-01-01")};

	var cityNames = dat.cityNames;

	$scope.cityNamesLoop = cityNames.map(function(d){
		return{
			name: d
		};
	});

	$scope.permits = dat.permits;

	$scope.prices = dat.prices;

	$scope.color = 	d3.scale.category10()
			.domain(cityNames);

	$scope.ydomain ={
		prices: [0,900000],
		permits: [0,7000]
	};

}]);