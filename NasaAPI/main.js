$(document).ready(function() {
    console.log( "ready!" );

  var nasa= "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-17&end_date=2017-10-24&api_key=nxDNl3KDNp3hoakhRWDKErj3kIbrw8SS5Y7UsCQi";
  $.get(nasa, function(data) {
    //console.log(data.near_earth_objects)
    //console.log(data);

    for (var day in data.near_earth_objects) {
      //console.log("Asteroid Name" + data.near_earth_objects[day][0].name);
      getInfo(data.near_earth_objects[day]);
      //console.log("Velocity" + data.near_earth_objects[day][0].close_approach_data.relative_velocity);{

    //$("p").append("<b>Appended text</b>");
      for (var i=0; i<data.near_earth_objects[day].length; i++) {
        if (data.near_earth_objects[day][i].is_potentially_hazardous_asteroid) {
          $(".theScreen").append("<p>Asteroid Name: " + data.near_earth_objects[day][i].name + "</p>")
          $(".theScreen").append("<p>Velocity MPH: " + data.near_earth_objects[day][i].close_approach_data[0].relative_velocity.miles_per_hour + "</p>")
          $(".theScreen").append("<p>Max Diameter Feet: " + data.near_earth_objects[day][i].estimated_diameter.feet.estimated_diameter_max + "</p>")
          $(".theScreen").append("<p>Distance from Earth in Miles: " + data.near_earth_objects[day][i].close_approach_data[0].miss_distance.miles + "</p><br>")
        }
    }
  }

  function getInfo(dayArr) {
    console.log(dayArr);
    dayArr.forEach(function (element) {
      //console.log("Name" + element.name, "Max Diameter Feet: " + element.estimated_diameter.feet.estimated_diameter_max);

    });
      //console.log(element.close_approach_data[console.log(element.absolute_magnitude_h);0].miss_distance.miles);
    }
    //text method
    //var name1 = data.near_earth_objects[day][0].name

//get list of asteroids based on closest approach to earth
//GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
//https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-07&end_date=2017-09-08&api_key=DEMO_KEY

});

})
