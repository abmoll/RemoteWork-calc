$(document).ready(function() {
    console.log( "ready!" );

  var nasa= "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-17&end_date=2017-10-24&api_key=nxDNl3KDNp3hoakhRWDKErj3kIbrw8SS5Y7UsCQi";
  $.get(nasa, function(data) {
    //console.log(data.near_earth_objects)
    console.log(data);
    var hazardous = []
    for (var day in data.near_earth_objects) {
      //getInfo(data.near_earth_objects[day]);
      //day.sort(function(a, b){return b-a});
      //add all big asteroids to an array
      for (var i=0; i<data.near_earth_objects[day].length; i++) {
        if (data.near_earth_objects[day][i].is_potentially_hazardous_asteroid) {
          hazardous.push(data.near_earth_objects[day][i])
          // var diameter = data.near_earth_objects[day][i].estimated_diameter.feet.estimated_diameter_max;
          // console.log("diameter = " + diameter);
          // var largest = diameter.sort((function(a, b)
          //   {return a-b}));
        }
      }
    }
    //sort largest asteroids by max diameter
    hazardous.sort(function(a,b){
      return b.estimated_diameter.feet.estimated_diameter_max - a.estimated_diameter.feet.estimated_diameter_max
    })

    for (i in hazardous) {
    // for loop around hazardous .append hazardous.name ...
    $(".theScreen").append("<br><p>Asteroid Name: " + hazardous[i].name + "</p>")
    $(".theScreen").append("<p>Velocity MPH: " + Math.round(hazardous[i].close_approach_data[0].relative_velocity.miles_per_hour) + "</p>")
    $(".theScreen").append("<p>Max Diameter Feet: " + Math.round(hazardous[i].estimated_diameter.feet.estimated_diameter_max) + "</p>")
    $(".theScreen").append("<p>Distance from Earth in Miles: " + hazardous[i].close_approach_data[0].miss_distance.miles + "</p>")
    // $(".theScreen").append("<br><p>Asteroid Name: " + data.near_earth_objects[day][i].name + "</p>")
    // $(".theScreen").append("<p>Velocity MPH: " + Math.round(data.near_earth_objects[day][i].close_approach_data[0].relative_velocity.miles_per_hour) + "</p>")
    // $(".theScreen").append("<p>Max Diameter Feet: " + Math.round(data.near_earth_objects[day][i].estimated_diameter.feet.estimated_diameter_max) + "</p>")
    // $(".theScreen").append("<p>Distance from Earth in Miles: " + data.near_earth_objects[day][i].close_approach_data[0].miss_distance.miles + "</p>")
    }

  });



//get list of asteroids based on closest approach to earth
//GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
//https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-07&end_date=2017-09-08&api_key=DEMO_KEY

function getInfo(dayArr) {
  console.log(dayArr);
  //  dayArr.forEach(function (element) {
  //console.log("Name" + element.name, "Max Diameter Feet: " + element.estimated_diameter.feet.estimated_diameter_max);
  //  });
  //console.log(element.close_approach_data[console.log(element.absolute_magnitude_h);0].miss_distance.miles);
}

})
