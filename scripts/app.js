var app = angular.module('lineApp', []);

app.controller('mainCtrl',["$scope", "data", function($scope, dat){

	$scope.date = { val: new Date("2013-01-01")};

	var cityNames = dat.cityNames;

	$scope.cityNamesLoop = cityNames.map(function(d){
		return{
			name: d
		};
	});

	// console.log(dat.profiles)

	$scope.color = 	d3.scale.category10()
			.domain(cityNames);

	$scope.per = {
		truth: false
	}

	$scope.specs = {
		prices: {
			ydomain: [0,700000],
			format: d3.format("$.3s"),
			data: dat.prices
		}
		, permits: {
			ydomain: [0,7500],
			ydomain2: [0,200],
			format: d3.format(".2s"),
			data: dat.permits
		}
		, income: {
			ydomain: [0, 80000],
			data: dat.profiles['Median Income'],
			format: d3.format("$,3"),
		}
		, area: {
			ydomain: [0, 9000],
			data: dat.profiles['Land Area'],
			format: d3.format(",g")
		}
		, rent: {
			ydomain: [0, 2000],
			data: dat.profiles['Rent'],
			format: d3.format("$,3"),
		}
		, units: {
			ydomain: [0, 3000000],
			data: dat.profiles['Housing Units'],
			format: d3.format(".3s"),
		}
	};

}]);