

var fund = 200;
var weight = 200;
$(document).ready(function() {
  console.log("ready!");
  //any code inside doc ready wont run until html is loaded on page
  $('#totFunds').val(fund)

  $('#azamatplus').click(function(){
    alert("added azamat")
    fund = fund - 8;
    alert(fund)
    return fund;
    // funds = funds - 8;
    // weight = weight + 10;
    //return(totFunds - 5);
    //alert("weight: " + totWeight + " funds: " + funds)
  });


  $('#azamatminus').click(function(){
    alert("subtracted azamat")
  });

  $('#baywatchplus').click(function(){
    alert("added baywatch")
  });

  function subtractFunds(amount){
    funds = funds - amount;
  }

});

    $.get('/cargo-validator')

    //send start and end dates to the server


      // for (var i in hazardous) {
      //   // for loop around hazardous .append hazardous.name ...
      //   $(".theScreen").append("<br><p>Asteroid Name: " + hazardous[i].name + "</p>")
      //   $(".theScreen").append("<p>Velocity MPH: " + Math.round(hazardous[i].close_approach_data[0].relative_velocity.miles_per_hour) + "</p>");
      //   $(".theScreen").append("<p>Max Diameter Feet: " + Math.round(hazardous[i].estimated_diameter.feet.estimated_diameter_max) + "</p>");
      //   $(".theScreen").append("<p>Distance from Earth in Miles: " + hazardous[i].close_approach_data[0].miss_distance.miles + "</p>");
      // }
