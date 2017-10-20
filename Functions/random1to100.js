function random(){

  //var rand = Math.random() * (100) + 1;
  //console.log(rand);
  var rand = [0];
  var min = Math.ceil(1);
  var max = Math.floor(100);
  for (var i=0; i<10; i++) {
    var randNum = Math.floor(Math.random() * (100 - 1) + 1);
    //if (rand != rand[i])
    //check existing array for newly generated random number
    for (var j=0; j<rand.length; j++) {
      if (randNum !== rand[j]) {
        rand[i] = randNum;
      }
    }
  }
  return rand;
}
console.log(random());
