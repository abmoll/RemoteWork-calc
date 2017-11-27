var app = new Vue({
  el: '#app',
  data: {
    message: 'I do not understand Vue!'
    //anchorHref: "http://nfl.com",
    // friends: [
    //   {
    //     firstName: "jeff",
    //     lastName: "jeffereson",
    //   },
    //   {
    //     firstName: "bobby",
    //     lastName: "roberts",
    //   },
    // ]
  },
  methods: {
    newText: function(){
      app.message = "I love Vue!"
    }
  }
})

var Cereal = function(name, sweetness, mascotName, servings) {
  this.name: name
  this.sweetness: sweetness
  this.mascotName: mascotName
  this.servings: servings
}

Cereral.prototype.pour = function(){
  if servings != 0 {
    servings = servings-1;
    console.log(servings + " servings are left")
  }
  else console.log("no more cereal left!")
}

var crunch = new Cereal('Captain Crunch', 9, "Capn", 16);

crunch.pour()
