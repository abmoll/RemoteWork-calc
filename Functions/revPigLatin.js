function revPigLatin(word) {
  var newWord = '';

  var first= word[word.length-3];
  if (first !== 'w') {
    newWord = first + word;
    newWord = newWord.slice(0,-3);
  }
  else {
    newWord = word.slice(0,-3)
  }
  console.log(newWord);
  //console.log(newWord);
}

//
//   for (var i=1; i< word.length; i++) {
//     var test= word[length-3]
//     console.log(test);
//     newWord = newWord + word[i]
//   }
//   newWord = newWord + word[0] + 'ay';
//   //console.log(newWord);
// }

//place first letter of word and add it to end of new word
//add ay to new word
//console.log(pigLatin("excercise"));

revPigLatin("omanceray");
revPigLatin("appyhay");
revPigLatin("exerciseway");
revPigLatin("appleway");
