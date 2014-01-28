app.directive('lineFollow', function(){

	return {
		scope: {
			city: "=",
			date: "=",
			color: "=",
			specs: "=",
			first: "@",
			bottom: "@"
		},
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		link: function(scope, el, attr) {


				var margin = {top: 35, right: 10, bottom: 5, left: 10};

				if(scope.first=='true') margin.left += 25;

				var width = 100 - margin.left - margin.right,
				    height = 175 - margin.top - margin.bottom;

				if(scope.bottom == "true") height -= 10; margin.bottom +=10;

			  var x = d3.time.scale()
			      .range([0, width])
			      .domain([
			  		new Date("1997-07-01"),
			  		new Date("2013-12-01")
			  	]);

			  var xBackwards = d3.scale.linear().domain(x.range());

			  var y = d3.scale.linear()
			      .range([height, 0])

			  var bisect = d3.bisector(function(d) { return d.date; }).left;


			  var line = d3.svg.line()
			      .x(function(d) { return x(d.date); })
			      .y(function(d) { return y(d.val); });



			// set up initial svg object
			var svg = d3.select(el[0]).append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			if(scope.first=="true"){
				var yAxis = d3.svg.axis()
				    .scale(y)
				    .orient("left");

				svg.append("g")
				    .attr("class", "y axis")
				    .call(yAxis)
				  .append("text")
				    .attr("transform", "rotate(-90)")
				    .attr("y", -25)
				    .attr("dy", ".71em")
				    .attr("font-size","13px")
				    .style("text-anchor", "end")
				    .text(scope.specs.label);
			}


			y.domain(scope.specs.ydomain);

			var city = scope.city
				, data = scope.specs.data[city]
				, format = scope.specs.format;

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
          .attr("class", "line")
          .attr("d", line);

      var circle = svg.append("g")
          .attr("class", "dot");

        circle.append("circle")
        	.attr("r",3);

      var textLabel = svg.append("text")
      	.attr("class", "number")
      	.attr("dy","-1.1em");

      var year =	svg.append("text")
      	    .attr("class", "number")
      	    .attr("dy", "1em")
      	    .style("opacity", scope.bottom == "true" ? 1 : 0);

     	var stretch = Math.round(data.length *0.25)

      scope.$watch('date.val', function(newDate){

      	var i = bisect(data, newDate, 0, data.length - 1),
      		j = Math.round(i / (data.length - 1) * (data.length - stretch)),
					v = data[i],
					newX = x(v.date),
					newY = y(v.val),
					newYText = y(d3.max(data.slice(j, j + stretch), function(d) { return d.val; }));

      	circle.attr("transform", function(){ 
      		return "translate(" + newX + "," + newY + ")"; 
      	});

      	textLabel.text(format(v.val))
      		.attr("transform", function(){
	      			return "translate("
	      				+ xBackwards.range([x.range()[0],x.range()[1]-this.getComputedTextLength()])(newX) + ","
	      				+ newYText + ")";
		      	}
      		);

      		year.text(v.date.getFullYear())
      		.attr("transform", function(){
	      			return "translate("
	      				+ xBackwards.range([x.range()[0],x.range()[1]-this.getComputedTextLength()])(newX) + ","
	      				+ height + ")";
		      	}
      		);

      });

      svg.append("rect")
          .attr("class", "overlay")
          .attr("x", -4)
          .attr("y",-margin.top)
          .attr("width", width)
          .attr("height", height + margin.top + margin.bottom)
          .on("mousemove", function(){
          	var q = x.invert(d3.mouse(this)[0]);
          	scope.$apply( 
          		scope.date.val = q
          		);
          });

		}
	};
});
