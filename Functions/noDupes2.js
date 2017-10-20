function noDupes2() {

var arr = [1,1,2,3,1,2,3];
var newArr = [];

newArr[0] = arr[0];

// iterate over old array start at 0
for (var i=0; i<arr.length-1; i++) {
  for (var j=1; j<newArr.length-1; j++) {
  //if no match, then add to new array
    if (arr[i] !== newArr[j]) {
      newArr[j] = arr.charAt(i)
    }

  }
  console.log("new array= " + newArr);
}
}
