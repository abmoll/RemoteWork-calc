class Cereal {

  constructor(name, sweetness, mascotName, servings) {
    this.name = name
    this.sweetness = sweetness
    this.mascotName = mascotName
    this.servings = servings
  }

  //constructor - after this, you can define more methods
  pour() {
    if (this.servings > 0) {
      this.servings--;
      console.log(`we have ${this.servings} of ${this.name} left`)
    }
    else console.log(`no more ${this.name} left!`)
  }
}

var crunch = new Cereal('Captain Crunch', 9, "Capn", 16);

for (var key in crunch)
  console.log(key);

crunch.pour()
