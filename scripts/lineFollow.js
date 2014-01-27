app.directive('lineFollow', ['permitData', function(permitData){

	var margin = {top: 20, right: 0, bottom: 30, left: 0},
	    width = 100 - margin.left - margin.right,
	    height = 250 - margin.top - margin.bottom;

    var x = d3.time.scale()
        .range([0, width])
        .domain([
	  		new Date("2002-010-01"),
	  		new Date("2013-10-01")
	  	]);

    var xBackwards = d3.scale.linear().domain(x.range()).range([x.range()[0],x.range()[1]-28]);

    var y = d3.scale.linear()
        .range([height, 0])
        .domain([0,7000]);

    var color = d3.scale.category10()
    		.domain(permitData.cityNames);

    var bisect = d3.bisector(function(d) { return d.date; }).left;

    var area = d3.svg.area()
        .x(function(d) { return x(d.date); })
        .y1(function(d) { return y(d.permits); })
        .y0(height);

    var line = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.permits); });


	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		link: function(scope, el, attr) {

			// set up initial svg object
			var svg = d3.select(el[0]).append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			var city = attr.city;
			
			var data = scope.cities[city];

			var xLine = svg.append("g")
			    .attr("class", "g-x g-axis")
			  .append("line")
			    .attr("x2", x(data[data.length-1].date))
			    .attr("y1", height)
			    .attr("y2", height);

			var gPaths = svg.append("g")
				.attr("class","g-paths");

      svg.append("path")
      		.datum(data)
          .attr("class", "area")
          .attr("d", area)
          .style("fill", color(city));

      svg.append("path")
      		.datum(data)
          .attr("class", "line")
          .attr("d", line);

      var circle = svg.append("g")
          .attr("class", "dot");

        circle.append("circle")
        	.attr("r",3)
          // .attr("fill","#000");

      var textLabel = svg.append("text")
      	.attr("class", "number")
      	.attr("dy","-1.1em");

      scope.$watch('date', function(newDate){

      	var i = bisect(data, newDate, 0, data.length - 1),
      		j = Math.round(i / (data.length - 1) * (data.length - 14)),
					v = data[i],
					newX = x(v.date),
					newY = y(v.permits),
					newYText = y(d3.max(data.slice(j, j + 14), function(d) { return d.permits; }));

      	circle.attr("transform", function(){ 
      		return "translate(" + newX + "," + newY + ")"; 
      	});

      	textLabel.text(v.permits)
      		.attr("transform", function(){
	      			return "translate("
	      				+ xBackwards(newX) + ","  
	      				+ newYText + ")";
		      	}
      		);

      });

      svg.append("rect")
          .attr("class", "overlay")
          .attr("x", -4)
          .attr("width", width)
          .attr("height", height)
          .on("mousemove", function(){
          	scope.update( x.invert(d3.mouse(this)[0]) );
          });


		}
	};
}]);
