var arrayInt = [];

function notAppear(arrayInt) {
  for (var i=0; i <= arrayInt.length; i++) {
    if (arrayInt[i] !== (i+1)) {
       console.log((i+1) + " is the first integer missing");
       break;
    }
  }
}

notAppear([1,2,5]);
notAppear([1,2,3,4,5]);
notAppear([3,4,5]);
