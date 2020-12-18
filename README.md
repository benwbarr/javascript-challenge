# JavaScript Homework - JavaScript and DOM Manipulation

![Images/landingResize.png](https://github.com/benwbarr/javascript-challenge/blob/main/UFO/static/images/Capture1.PNG?raw=true)


## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.
There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.
That's why we are hiring you. We need you to write code that will create a table dynamically based upon a dataset we provide. We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.
You can handle this... right? The planet Earth needs to know what we have found!

## Your Task

### Before You Begin

1. Create a new repository for this project called javascript-challenge. Do not add this homework to an existing repository.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the Javascript challenge. Use the folder names to correspond to the challenges: UFO-level-1 and UFO-level-2.

4. Add your html files to this folder as well as your static folder containing your javascript. This will be the main script to run for analysis.

5. Push the above changes to GitHub or GitLab.

6. Deploy to GitHub pages.

### Level 1: Automatic Table and Date Search (Required)
* Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>UFO Finder</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <link rel="stylesheet" href="static/css/style.css">
</head>

<body>
  <div class="wrapper">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">UFO Sightings
            <img class="nav-ufo" src="static/images/ufo.svg">
          </a>
        </div>
      </div>
    </nav>
    <div class="hero text-center">
      <h1>UFO Sightings</h1>
      <p>The Truth is Out There</p>
    </div>
    <div class="container">
      <div class="row margin-top-50">
        <div class="col-md-2">
          <aside class="filters">
            <div class="panel panel-default">
              <div class="panel-heading">Filter Search</div>
              <div class="panel-body">
                <form>
                  <div class="form-group">
                    <ul class="list-group" id="filters">
                      <li class="filter list-group-item">
                        <label for="date">Enter a Date</label>
                        <input class="form-control" id="datetime" type="text" placeholder="1/11/2011">
                      </li>
                      <li class="filter list-group-item">
                        <label for="city">Enter a City</label>
                        <input class="form-control" id="city" type="text">
                      </li>
                      <li class="filter list-group-item">
                        <label for="state">Enter a State</label>
                        <input class="form-control" id="state" type="text">
                      </li>
                      <li class="filter list-group-item">
                        <label for="country">Enter a Country</label>
                        <input class="form-control" id="country" type="text">
                      </li>
                      <li class="filter list-group-item">
                        <label for="shape">Enter a Shape</label>
                        <input class="form-control" id="shape" type="text">
                      </li>
                    </ul>
                  </div>
                  <button id="filter-btn" type="button" class="btn btn-default">Filter Table</button>
                </form>
              </div>
            </div>
          </aside>
        </div>
        <div class="col-md-10">
          <div id="table-area" class="box">
            <table id="ufo-table" class="table table-striped">
              <thead>
                <tr>
                  <th class="table-head">Date</th>
                  <th class="table-head">City</th>
                  <th class="table-head">State</th>
                  <th class="table-head">Country</th>
                  <th class="table-head">Shape</th>
                  <th class="table-head">Duration</th>
                  <th class="table-head">Comments</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <span class="bottom">UFO Sightings</span>
    </footer>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>
  <script src="static/js/data.js"></script>
  <script src="static/js/app.js"></script>
</body>

</html>
```

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO    sighting.

  * Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.



* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
```js
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
```

### Level 2: Multiple Search Categories (Optional)
* Complete all of Level 1 criteria.


* Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

 1. date/time
 2. city
 3. state
 4. country
 5. shape

![Images/landingResize.png](https://github.com/benwbarr/javascript-challenge/blob/main/UFO/static/images/Capture2.PNG?raw=true)

```js
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
```

