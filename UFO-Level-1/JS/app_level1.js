// Print data from data.js
var tableData = data;
var tbody = d3.select('tbody');

// YOUR CODE HERE!

//Select the button and extract the date value 
var button = d3.select("#filter-btn");
button.on("click", function(){

  var summary = d3.selectAll("#ufo-table>tbody>tr");
summary.html("");
var dateElement = d3.selectAll("#datetime");
var date = dateElement.property("value");
var date = dateElement.property("value");

//Filter and keep the chosen date
var filteredData = tableData.filter(tableData => tableData.datetime === date);
var tbody = d3.select("tbody");

filteredData.forEach(sighting => {
var row = tbody.append("tr");
Object.defineProperties(sighting).forEach(([key, value]=> {
var cell = row.appendf("tr");
cell.text(value);
})

})

});
