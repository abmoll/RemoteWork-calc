var fund = 200;
var weight = 0;
var azamat = 0;
var azamatCost = 25;
var azamatWt = 10
var item = "";
var flag = 0;
var numItems = 0;

$('#totFunds').val(fund);
//checkFunds();

$(document).ready(function() {
  console.log("ready!");
  //any code inside doc ready wont run until html is loaded on page

  $('#azamatplus').click(function(event) {
    event.preventDefault();
    fund = fund - azamatCost;
    //check if funds are enough fn

    $('#totFunds').val(fund)
    checkFunds();
    weight = weight + azamatWt;
    $('#totWeight').val(weight)
    //check weight fn
    azamat++
    document.getElementById("azamat").innerHTML = azamat;
  });

  $('#azamatminus').click(function() {
    alert("subtracted azamat")
    azamat--
    document.getElementById("azamat").innerHTML = azamat;
  });

  function checkFunds(){
    if (document.getElementById('totFunds').value <= 0) {
      document.getElementById("validate").style.border = "thick solid #DC143C";
      alert("you do not have enough funds");
    }
  }
  $('#validate').click(function() {
    alert("validating")
    checkFunds();
    if (document.getElementById('totFunds').value > 0) {
      //document.getElementById("validate").style.border = "thin solid #000000";
    }
    if (document.getElementById('totWeight').value > 200) {
      alert("you have exceeded your weight limit")
      document.getElementById("validate").style.border = "thick solid #DC143C";
    }
    if (document.getElementById('totWeight').value < 200) {
      //document.getElementById("validate").style.border = "thin solid #000000";
    }
    $.post("/validate-cargo", {
        weight: weight,
        fund: fund,
        stuff: [{
            item: "azamat",
            numItems: azamat
          },
          {
            item: "flag",
            numItems: flag
          }]
      },
      function(data, status) {
        alert("Data: " + data + "\nStatus: much " + status);
      });
  });

  $('#baywatchplus').click(function() {
    alert("added baywatch")
  });

  function subtractFunds(amount) {
    funds = funds - amount;
  }

  $.get('/cargo-validator');

  $.get('/allTrip')

});
//if cargo is valid do this,

//send start and end dates to the server
// for (var i in hazardous) {
//   // for loop around hazardous .append hazardous.name ...
//   $(".theScreen").append("<br><p>Asteroid Name: " + hazardous[i].name + "</p>")
//   $(".theScreen").append("<p>Velocity MPH: " + Math.round(hazardous[i].close_approach_data[0].relative_velocity.miles_per_hour) + "</p>");
//   $(".theScreen").append("<p>Max Diameter Feet: " + Math.round(hazardous[i].estimated_diameter.feet.estimated_diameter_max) + "</p>");
//   $(".theScreen").append("<p>Distance from Earth in Miles: " + hazardous[i].close_approach_data[0].miss_distance.miles + "</p>");
// }
