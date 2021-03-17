
var data, json
var width, height, projection, path, color, legendText, svg, div
var getDateFromDayNum = function(dayNum,year){

	    var date = new Date();
	      if(year){
	         date.setFullYear(year);
	     }
	    date.setMonth(0);
	    date.setDate(0);
	    var timeOfFirst = date.getTime(); // this is the time in milliseconds of 1/1/YYYY
	    var dayMilli = 1000 * 60 * 60 * 24;
	    var dayNumMilli = dayNum * dayMilli;
	    date.setTime(timeOfFirst + dayNumMilli);
	    return date;
	}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var output1 = document.getElementById("demo1");






function colorbymap(day) {
	
	var keystate = Object.keys(data[day])	
		for (var i = 0; i <keystate.length; i++) {
			// Grab State Name
			var dataState = keystate[i];
			
			// Grab data value 
			var dataValue = data[day][keystate[i]];
			
			// Find the corresponding state inside the GeoJSON
			for (var j = 0; j < json.features.length; j++)  {
				var jsonState = json.features[j].properties.name;

				if (dataState == jsonState) {

				// Copy the data value into the JSON
				json.features[j].properties.dataValue = dataValue; 
				
				// Stop looking through the JSON
				break;
				}
			}
		
		}
		svg.selectAll("path").remove()
		// Bind the data to the SVG and create one path per GeoJSON feature
	svg.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("d", path)
		.style("stroke", "#fff")
		.style("stroke-width", "1")
		.style("fill", function(d) {

		// Get data value
		var value = d.properties.dataValue;
		
		if (value == "Good") {
			return "#14b81a";
		}
		else if (value == "Moderate") {
			return "#FFD700";
		}
		else if (value == "Unhealthy for Sensitive Groups") {
			return "#d68910";
		}
		else if (value == "Unhealthy") {
			return " #d35400 ";
		}
		else if (value == "Very Unhealthy") {
			return "purple";
		}
		else if (value == "Hazardous") {
			return "#641e16";

		} else {
			return "grey";
		}
	});

}	

 

function initplot () {
	d3.select("#d3container")
				.select("svg")
				.remove()
	d3.select("body")
			    .select(".tooltip")   
	    		.remove()
	d3.select(".legend")
				.remove()

	//Width and height of map
	 width = 960;
	 height = 500;

	// D3 Projection
	 projection = d3.geo.albersUsa()
					   .translate([width/2, height/2])    // translate to center of screen
					   .scale([1000]);          // scale things down so see entire US
	      
	// Define path generator
	 path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
			  	 .projection(projection);  // tell path generator to use albersUsa projection

			
	// Define linear scale for output
	 color = d3.scale.linear()
				  .range(["grey", "#641e16", "purple", "#d35400", "#d68910", "#FFD700", "#14b81a"]);
						// "grey", "maroon", "purple", "red", "orange", "yellow", "green"

	 legendText = ["Good", "Moderate", "Unhealthy for Sensitive Groups",
											 "Unhealthy", "Very Unhealthy", "Hazardous", "No Data Available"];

	//Create SVG element and append map to the SVG
	 svg = d3.select("#d3container")
				.append("svg")
				.attr("width", width)
				.attr("height", height);
	        
	// Append Div for tooltip to SVG
	 div = d3.select("body")
			    .append("div")   
	    		.attr("class", "tooltip")               
	    		.style("opacity", 100);
}

// Load in my states data!
function startplot () {
	color.domain([0,1,2,3,4,5, 6]); // setting the range of the input data
	// Load GeoJSON data and merge with states data
	d3.json("us-states.json", function(j) {
	json = j
	// Loop through each state data value in the .csv file
	// for (var i = 0; i < data.length; i++) {
	colorbymap(0)
		

	        
	// Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
	var legend = d3.select("body").append("svg")
	      			.attr("class", "legend")
	     			.attr("width", 200)
	    			.attr("height", 150)
	   				.selectAll("g")
	   				.data(color.domain().slice().reverse())
	   				.enter()
	   				.append("g")
	     			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

	  	legend.append("rect")
	   		  .attr("width", 18)
	   		  .attr("height", 18)
	   		  .style("fill", color);

	  	legend.append("text")
	  		  .data(legendText)
	      	  .attr("x", 24)
	      	  .attr("y", 9)
	      	  .attr("dy", ".35em")
	      	  .text(function(d) { return d; });
		});
}


var filename = "categoriesforStates.csv"
var what_year = 2020

function init (filename,what_year) { 
	slider.oninput = function() {
  output.innerHTML = this.value;
  colorbymap(this.value)
  output1.innerHTML = getDateFromDayNum(this.value,what_year).toDateString()
}
output1.innerHTML = getDateFromDayNum(slider.value,what_year).toDateString();
	initplot()
	d3.csv(filename, function(d) {
		data = d
		console.log(data)
	startplot()

});

}

init(filename,what_year)
