var app = angular.module('lineApp', []);

app.controller('mainCtrl',["$scope", "data", function($scope, dat){

	$scope.date = { val: new Date("2013-01-01")};

	var cityNames = dat.cityNames;

	$scope.cityNamesLoop = cityNames.map(function(d){
		return{
			name: d
		};
	});

	console.log(dat.profiles)

	$scope.color = 	d3.scale.category10()
			.domain(cityNames);

	$scope.specs = {
		prices: {
			ydomain: [0,700000],
			format: d3.format("$.3s"),
			data: dat.prices,
			label: "Median Home Price"
		}
		, permits: {
			ydomain: [0,7500],
			format: d3.format(".2s"),
			data: dat.permits,
			label: "Housing Permits Issued"
		}
		, income: {
			ydomain: [40000, 80000],
			data: dat.profiles,
			format: d3.format("$,3"),
		}
		, area: {
			ydomain: [2000, 9000],
			data: dat.profiles,
			format: d3.format(",g")

		}
	};

}]);