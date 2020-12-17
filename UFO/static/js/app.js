// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var dataPopulate = (dataInput) => {
    dataInput.forEach(ufoInfo => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoInfo[column])
        )
    });
}
dataPopulate(data);

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();
    tbody.selectAll('*').remove();
    var dateInput = d3.select("#datetime")
    var textInput = dateInput.property("value")
    var filteredData = tableData.filter(cell => cell.datetime === textInput);

    filteredData.forEach(function(ufoSearch) {
        var row = tbody.append("tr");
        Object.entries(ufoSearch).forEach(function([key, value]) {
            var entry = tbody.append("td");
            entry.text(value)
        })
    })
})