var parseDate = d3.time.format("%Y-%m-%d").parse;

data.forEach(function(d) {
  d.date = parseDate(d.date);
});

var cityNames = d3.keys(data[0]).filter(function(key){return key !== "date"});

var cities = cityNames.map(function(name) {
  return {
    name: name,
    values: data.map(function(d) {
      return {date: d.date, permits: +d[name]*1000};
    })
  };
});

var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 620 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10().domain(cityNames);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.permits); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

x.domain([new Date("7/1/2002"), new Date("10/1/2013")]);

y.domain([
  d3.min(cities, function(c) { return d3.min(c.values, function(v) { return v.permits; }); }),
  d3.max(cities, function(c) { return d3.max(c.values, function(v) { return v.permits; }); })
]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("New Private Housing Units Authorized");

var city = svg.selectAll(".city")
    .data(cities)
  .enter().append("g")
    .attr("class", "city");

city.append("path")
    .attr("class", "line")
    .attr("d", function(d) { return line(d.values); })
    .style("stroke", function(d) { return color(d.name); });

city.append("text")
    .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
    .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.permits) + ")"; })
    .attr("x", 3)
    .attr("dy", ".35em")
    .text(function(d) { return d.name; });
