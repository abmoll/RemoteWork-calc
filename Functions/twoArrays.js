function twoArrays(arr1, arr2){

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i=0; i<arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
        return false;
    }
    else return true;
  }
}

console.log(twoArrays([1,2,3] , [1,2,3,4]));
