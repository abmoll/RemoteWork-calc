var newArr = [];
//cutoff([1,2,3,4,5,6,7,8],4);
cutoff([1,5,7,3,1,5,7],3);
function cutoff(arr, max) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i] <= max) {
      newArr.push(arr[i]);
    }
    else {
      newArr.push(max);
      }
  }
  console.log(newArr);
  //console.log(newArr)
}
