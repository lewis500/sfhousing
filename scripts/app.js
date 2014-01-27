var app = angular.module('lineApp', [])

app.factory('permitData', function(){

	var data = [{"date":"1988-01-01","San Francisco":1121,"Houston":600,"Seattle":2010,"Portland":728,"Los Angeles":4996,"San Diego":1648},
{"date":"1988-04-01","San Francisco":1676,"Houston":735,"Seattle":2186,"Portland":974,"Los Angeles":7416,"San Diego":2456},
{"date":"1988-07-01","San Francisco":1759,"Houston":808,"Seattle":3698,"Portland":1160,"Los Angeles":5225,"San Diego":2565},
{"date":"1988-10-01","San Francisco":2433,"Houston":769,"Seattle":2337,"Portland":1105,"Los Angeles":6413,"San Diego":2954},
{"date":"1989-01-01","San Francisco":1959,"Houston":997,"Seattle":2064,"Portland":1346,"Los Angeles":4922,"San Diego":1567},
{"date":"1989-04-01","San Francisco":1700,"Houston":846,"Seattle":2689,"Portland":1652,"Los Angeles":5867,"San Diego":1569},
{"date":"1989-07-01","San Francisco":1223,"Houston":937,"Seattle":3121,"Portland":1258,"Los Angeles":5554,"San Diego":1343},
{"date":"1989-10-01","San Francisco":1397,"Houston":1317,"Seattle":2781,"Portland":1505,"Los Angeles":5598,"San Diego":1728},
{"date":"1990-01-01","San Francisco":1279,"Houston":1510,"Seattle":3044,"Portland":1389,"Los Angeles":3809,"San Diego":2207},
{"date":"1990-04-01","San Francisco":759,"Houston":937,"Seattle":2693,"Portland":1356,"Los Angeles":4288,"San Diego":1249},
{"date":"1990-07-01","San Francisco":744,"Houston":1040,"Seattle":2272,"Portland":1277,"Los Angeles":2372,"San Diego":993},
{"date":"1990-10-01","San Francisco":500,"Houston":960,"Seattle":1522,"Portland":940,"Los Angeles":1919,"San Diego":863},
{"date":"1991-01-01","San Francisco":1107,"Houston":1049,"Seattle":1083,"Portland":704,"Los Angeles":1786,"San Diego":1284},
{"date":"1991-04-01","San Francisco":687,"Houston":1550,"Seattle":1508,"Portland":884,"Los Angeles":2528,"San Diego":569},
{"date":"1991-07-01","San Francisco":755,"Houston":1424,"Seattle":1480,"Portland":734,"Los Angeles":1728,"San Diego":434},
{"date":"1991-10-01","San Francisco":682,"Houston":1161,"Seattle":1045,"Portland":1085,"Los Angeles":1607,"San Diego":364},
{"date":"1992-01-01","San Francisco":669,"Houston":1432,"Seattle":1490,"Portland":1044,"Los Angeles":1541,"San Diego":779},
{"date":"1992-04-01","San Francisco":750,"Houston":1511,"Seattle":1812,"Portland":942,"Los Angeles":1693,"San Diego":601},
{"date":"1992-07-01","San Francisco":704,"Houston":1356,"Seattle":1525,"Portland":952,"Los Angeles":1412,"San Diego":433},
{"date":"1992-10-01","San Francisco":851,"Houston":1267,"Seattle":1423,"Portland":958,"Los Angeles":1360,"San Diego":233},
{"date":"1993-01-01","San Francisco":768,"Houston":1242,"Seattle":1187,"Portland":913,"Los Angeles":1433,"San Diego":395},
{"date":"1993-04-01","San Francisco":655,"Houston":1161,"Seattle":1645,"Portland":1093,"Los Angeles":1235,"San Diego":538},
{"date":"1993-07-01","San Francisco":593,"Houston":1644,"Seattle":1673,"Portland":1241,"Los Angeles":1154,"San Diego":471},
{"date":"1993-10-01","San Francisco":664,"Houston":1811,"Seattle":1701,"Portland":1232,"Los Angeles":1030,"San Diego":557},
{"date":"1994-01-01","San Francisco":695,"Houston":2028,"Seattle":1401,"Portland":1431,"Los Angeles":1176,"San Diego":535},
{"date":"1994-04-01","San Francisco":784,"Houston":1747,"Seattle":1673,"Portland":1396,"Los Angeles":2575,"San Diego":710},
{"date":"1994-07-01","San Francisco":782,"Houston":2128,"Seattle":2016,"Portland":1572,"Los Angeles":1554,"San Diego":525},
{"date":"1994-10-01","San Francisco":740,"Houston":1465,"Seattle":1365,"Portland":1240,"Los Angeles":1593,"San Diego":545},
{"date":"1995-01-01","San Francisco":625,"Houston":1827,"Seattle":1380,"Portland":1224,"Los Angeles":1151,"San Diego":390},
{"date":"1995-04-01","San Francisco":630,"Houston":1567,"Seattle":1923,"Portland":1636,"Los Angeles":1568,"San Diego":800},
{"date":"1995-07-01","San Francisco":773,"Houston":1812,"Seattle":1458,"Portland":1366,"Los Angeles":1406,"San Diego":595},
{"date":"1995-10-01","San Francisco":904,"Houston":2127,"Seattle":1454,"Portland":1595,"Los Angeles":1379,"San Diego":485},
{"date":"1996-01-01","San Francisco":700,"Houston":2043,"Seattle":1554,"Portland":1644,"Los Angeles":1332,"San Diego":499},
{"date":"1996-04-01","San Francisco":897,"Houston":2057,"Seattle":1837,"Portland":1546,"Los Angeles":1613,"San Diego":594},
{"date":"1996-07-01","San Francisco":865,"Houston":1883,"Seattle":1814,"Portland":1760,"Los Angeles":1481,"San Diego":606},
{"date":"1996-10-01","San Francisco":860,"Houston":2099,"Seattle":1712,"Portland":1519,"Los Angeles":1623,"San Diego":574},
{"date":"1997-01-01","San Francisco":1070,"Houston":2179,"Seattle":1696,"Portland":1637,"Los Angeles":1291,"San Diego":614},
{"date":"1997-04-01","San Francisco":1071,"Houston":2791,"Seattle":1776,"Portland":1293,"Los Angeles":2230,"San Diego":903},
{"date":"1997-07-01","San Francisco":1126,"Houston":3364,"Seattle":2432,"Portland":1719,"Los Angeles":1921,"San Diego":998},
{"date":"1997-10-01","San Francisco":1161,"Houston":2322,"Seattle":1701,"Portland":1913,"Los Angeles":2008,"San Diego":1131},
{"date":"1998-01-01","San Francisco":1019,"Houston":3641,"Seattle":1970,"Portland":1311,"Los Angeles":1250,"San Diego":844},
{"date":"1998-04-01","San Francisco":1199,"Houston":3907,"Seattle":2168,"Portland":1457,"Los Angeles":2299,"San Diego":1184},
{"date":"1998-07-01","San Francisco":1416,"Houston":3852,"Seattle":2509,"Portland":1642,"Los Angeles":1808,"San Diego":1170},
{"date":"1998-10-01","San Francisco":1518,"Houston":4134,"Seattle":2271,"Portland":1511,"Los Angeles":1758,"San Diego":757},
{"date":"1999-01-01","San Francisco":1098,"Houston":3385,"Seattle":1660,"Portland":1384,"Los Angeles":1969,"San Diego":1325},
{"date":"1999-04-01","San Francisco":1140,"Houston":2679,"Seattle":2649,"Portland":1388,"Los Angeles":2247,"San Diego":1526},
{"date":"1999-07-01","San Francisco":1174,"Houston":3003,"Seattle":2172,"Portland":1077,"Los Angeles":1999,"San Diego":1481},
{"date":"1999-10-01","San Francisco":991,"Houston":3258,"Seattle":1899,"Portland":995,"Los Angeles":2269,"San Diego":915},
{"date":"2000-01-01","San Francisco":1205,"Houston":2825,"Seattle":1966,"Portland":1152,"Los Angeles":2504,"San Diego":1210},
{"date":"2000-04-01","San Francisco":1077,"Houston":2816,"Seattle":2085,"Portland":1121,"Los Angeles":3111,"San Diego":1786},
{"date":"2000-07-01","San Francisco":1097,"Houston":2825,"Seattle":2152,"Portland":1049,"Los Angeles":2200,"San Diego":1041},
{"date":"2000-10-01","San Francisco":1297,"Houston":3062,"Seattle":1784,"Portland":1193,"Los Angeles":1986,"San Diego":1101},
{"date":"2001-01-01","San Francisco":1142,"Houston":3064,"Seattle":1876,"Portland":1271,"Los Angeles":2635,"San Diego":1393},
{"date":"2001-04-01","San Francisco":1030,"Houston":2939,"Seattle":2102,"Portland":1024,"Los Angeles":2298,"San Diego":1619},
{"date":"2001-07-01","San Francisco":738,"Houston":3085,"Seattle":1843,"Portland":1283,"Los Angeles":1819,"San Diego":1284},
{"date":"2001-10-01","San Francisco":722,"Houston":3335,"Seattle":1389,"Portland":1046,"Los Angeles":2121,"San Diego":1165},
{"date":"2002-01-01","San Francisco":1153,"Houston":3738,"Seattle":1401,"Portland":1173,"Los Angeles":1754,"San Diego":1290},
{"date":"2002-04-01","San Francisco":943,"Houston":3460,"Seattle":2176,"Portland":1211,"Los Angeles":2303,"San Diego":1170},
{"date":"2002-07-01","San Francisco":967,"Houston":3937,"Seattle":1674,"Portland":1141,"Los Angeles":2439,"San Diego":1090},
{"date":"2002-10-01","San Francisco":1062,"Houston":4531,"Seattle":1655,"Portland":1189,"Los Angeles":2896,"San Diego":1112},
{"date":"2003-01-01","San Francisco":1068,"Houston":5030,"Seattle":1606,"Portland":1436,"Los Angeles":2529,"San Diego":1682},
{"date":"2003-04-01","San Francisco":1117,"Houston":4640,"Seattle":1995,"Portland":1315,"Los Angeles":2653,"San Diego":1289},
{"date":"2003-07-01","San Francisco":1346,"Houston":4447,"Seattle":2129,"Portland":1219,"Los Angeles":2148,"San Diego":1473},
{"date":"2003-10-01","San Francisco":1309,"Houston":4567,"Seattle":1385,"Portland":1141,"Los Angeles":2731,"San Diego":1203},
{"date":"2004-01-01","San Francisco":1119,"Houston":4523,"Seattle":1614,"Portland":1022,"Los Angeles":2780,"San Diego":1203},
{"date":"2004-04-01","San Francisco":1250,"Houston":4545,"Seattle":2115,"Portland":1281,"Los Angeles":3293,"San Diego":1590},
{"date":"2004-07-01","San Francisco":1370,"Houston":4531,"Seattle":2251,"Portland":1538,"Los Angeles":2613,"San Diego":1360},
{"date":"2004-10-01","San Francisco":1279,"Houston":4119,"Seattle":1876,"Portland":1387,"Los Angeles":3451,"San Diego":1145},
{"date":"2005-01-01","San Francisco":965,"Houston":5467,"Seattle":1829,"Portland":1366,"Los Angeles":2482,"San Diego":1745},
{"date":"2005-04-01","San Francisco":1262,"Houston":4960,"Seattle":2205,"Portland":1271,"Los Angeles":2990,"San Diego":1232},
{"date":"2005-07-01","San Francisco":1426,"Houston":5252,"Seattle":2309,"Portland":1447,"Los Angeles":2860,"San Diego":1071},
{"date":"2005-10-01","San Francisco":1289,"Houston":4691,"Seattle":2170,"Portland":1566,"Los Angeles":2381,"San Diego":626},
{"date":"2006-01-01","San Francisco":1474,"Houston":6002,"Seattle":1840,"Portland":1396,"Los Angeles":3070,"San Diego":1060},
{"date":"2006-04-01","San Francisco":1336,"Houston":5864,"Seattle":2539,"Portland":1528,"Los Angeles":3122,"San Diego":879},
{"date":"2006-07-01","San Francisco":845,"Houston":5402,"Seattle":2666,"Portland":1084,"Los Angeles":2337,"San Diego":539},
{"date":"2006-10-01","San Francisco":871,"Houston":5666,"Seattle":1587,"Portland":1078,"Los Angeles":2551,"San Diego":589},
{"date":"2007-01-01","San Francisco":880,"Houston":5734,"Seattle":2604,"Portland":1561,"Los Angeles":2362,"San Diego":882},
{"date":"2007-04-01","San Francisco":833,"Houston":5055,"Seattle":2223,"Portland":959,"Los Angeles":2409,"San Diego":584},
{"date":"2007-07-01","San Francisco":870,"Houston":4774,"Seattle":2263,"Portland":942,"Los Angeles":2138,"San Diego":501},
{"date":"2007-10-01","San Francisco":686,"Houston":4895,"Seattle":1655,"Portland":874,"Los Angeles":1738,"San Diego":509},
{"date":"2008-01-01","San Francisco":904,"Houston":3881,"Seattle":1405,"Portland":746,"Los Angeles":1398,"San Diego":405},
{"date":"2008-04-01","San Francisco":695,"Houston":3744,"Seattle":1666,"Portland":653,"Los Angeles":1725,"San Diego":686},
{"date":"2008-07-01","San Francisco":451,"Houston":3523,"Seattle":1263,"Portland":754,"Los Angeles":1004,"San Diego":360},
{"date":"2008-10-01","San Francisco":437,"Houston":2767,"Seattle":711,"Portland":358,"Los Angeles":970,"San Diego":187},
{"date":"2009-01-01","San Francisco":288,"Houston":2288,"Seattle":644,"Portland":268,"Los Angeles":691,"San Diego":230},
{"date":"2009-04-01","San Francisco":270,"Houston":1990,"Seattle":575,"Portland":338,"Los Angeles":592,"San Diego":301},
{"date":"2009-07-01","San Francisco":247,"Houston":2388,"Seattle":614,"Portland":290,"Los Angeles":629,"San Diego":225},
{"date":"2009-10-01","San Francisco":352,"Houston":2398,"Seattle":592,"Portland":407,"Los Angeles":477,"San Diego":207},
{"date":"2010-01-01","San Francisco":424,"Houston":2540,"Seattle":852,"Portland":381,"Los Angeles":757,"San Diego":333},
{"date":"2010-04-01","San Francisco":403,"Houston":2609,"Seattle":710,"Portland":377,"Los Angeles":841,"San Diego":407},
{"date":"2010-07-01","San Francisco":311,"Houston":1982,"Seattle":930,"Portland":323,"Los Angeles":1107,"San Diego":224},
{"date":"2010-10-01","San Francisco":393,"Houston":1854,"Seattle":809,"Portland":429,"Los Angeles":804,"San Diego":190},
{"date":"2011-01-01","San Francisco":361,"Houston":2011,"Seattle":579,"Portland":367,"Los Angeles":1021,"San Diego":503},
{"date":"2011-04-01","San Francisco":564,"Houston":2761,"Seattle":1232,"Portland":354,"Los Angeles":1582,"San Diego":468},
{"date":"2011-07-01","San Francisco":478,"Houston":2683,"Seattle":1062,"Portland":440,"Los Angeles":857,"San Diego":406},
{"date":"2011-10-01","San Francisco":404,"Houston":2795,"Seattle":849,"Portland":596,"Los Angeles":1112,"San Diego":375},
{"date":"2012-01-01","San Francisco":442,"Houston":3283,"Seattle":1099,"Portland":493,"Los Angeles":1418,"San Diego":401},
{"date":"2012-04-01","San Francisco":540,"Houston":3085,"Seattle":1607,"Portland":654,"Los Angeles":1572,"San Diego":615},
{"date":"2012-07-01","San Francisco":1221,"Houston":3870,"Seattle":1643,"Portland":778,"Los Angeles":1215,"San Diego":615},
{"date":"2012-10-01","San Francisco":693,"Houston":4370,"Seattle":1298,"Portland":692,"Los Angeles":1409,"San Diego":383},
{"date":"2013-01-01","San Francisco":845,"Houston":4173,"Seattle":1329,"Portland":1042,"Los Angeles":1787,"San Diego":569},
{"date":"2013-04-01","San Francisco":1143,"Houston":3897,"Seattle":1497,"Portland":879,"Los Angeles":2004,"San Diego":738},
{"date":"2013-07-01","San Francisco":699,"Houston":4075,"Seattle":1644,"Portland":863,"Los Angeles":1909,"San Diego":520}];

	var parseDate = d3.time.format("%Y-%m-%d").parse;

	var cityNames = d3.keys(data[0])
			.filter(function(key){return key !== "date"});

	var cities = {};

	cityNames.forEach(function(name) {

		cities[name] = data.map(function(d) {
	      return {date: parseDate(d.date), permits: +d[name]};
	    })

	});

	return {
		cities: cities,
		cityNames: cityNames
	}

});

app.controller('mainCtrl',["$scope", "permitData", function($scope, permitData){

	$scope.date = new Date("2013-01-01");

	$scope.cities = permitData.cities;

	$scope.cityNames = permitData.cityNames;

	$scope.cityNamesLoop = $scope.cityNames.map(function(d){
		return{
			name: d
		}
	})

	$scope.update = function(newDate){
		$scope.$apply(function(){
			$scope.date = newDate;
		})
	}



}]);