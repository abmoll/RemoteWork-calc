function pigLatin(word) {
  var newWord = '';

if (word[0] == 'a' | word[0] == 'e' | word[0] == 'i' | word[0]  == 'o' | word[0] =='u') {
  newWord = word + "way";
  console.log(newWord);
}

else {
  for (var i=1; i< word.length; i++) {
    newWord = newWord + word[i]
  }
  newWord = newWord + word[0] + 'ay';
  console.log(newWord);
}
}
//place first letter of word and add it to end of new word
//add ay to new word
//console.log(pigLatin("excercise"));

pigLatin("romance");
pigLatin("happy");
pigLatin("exercise");
pigLatin("apple");
