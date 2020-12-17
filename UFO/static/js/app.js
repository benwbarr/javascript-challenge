// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var dataPopulate = (dataInput) => {
    dataInput.forEach(ufoInfo => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoInfo[column])
        )
    });
}
dataPopulate(data);