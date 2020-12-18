// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var input1 = d3.select("#datetime");
var input2 = d3.select("#city");
var input3 = d3.select("#state");
var input4 = d3.select("#country");
var input5 = d3.select("#shape");


var dataPopulate = (dataInput) => {
    dataInput.forEach(ufoInfo => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoInfo[column])
        )
    });
}
dataPopulate(data);

var button = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");
button.on("click", () => {
    d3.event.preventDefault();
    var dateInput = input1.property("value");
    var cityInput = input2.property("value");
    var stateInput = input3.property("value");
    var countryInput = input4.property("value");
    var shapeInput = input5.property("value");

    var filterDate = data.filter(data => data.datetime === dateInput);
    var filterCity = data.filter(data => data.city === cityInput);
    var filterState = data.filter(data => data.state === stateInput);
    var filterCountry = data.filter(data => data.country === countryInput);
    var filterShape = data.filter(data => data.shape === shapeInput);

    var filterData = data.filter(data => data.datetime === dateInput && data.city === cityInput  &&
        data.state === stateInput  && data.country === countryInput  && data.shape === shapeInput);

    tbody.html("");

    var filter = {
        filterData, filterCity, filterDate, filterState, filterCountry, filterShape
    }

    if (filter.filterData.length !== 0) {
        dataPopulate(filterData);
    }
    else if (filter.filterData.length === 0 && ((filter.filterCity.length !== 0 || filter.filterDate.length !== 0
        || filter.filterState.length !== 0 || filter.filterCountry.length !== 0 || filter.filterShape.length !== 0))){
        dataPopulate(filterCity) || dataPopulate(filterDate) || dataPopulate(filterState)
        || dataPopulate(filterCountry) || dataPopulate(filterShape);

    }
    else {
        tbody.append("tr").append("td").text("No results!");
    }
})

reset.on("click", () => {
    tbody.html("");
    dataPopulate(data)
})


