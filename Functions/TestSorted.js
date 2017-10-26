sorted([1,2,5,6,9],[3,4,5,10]);
sorted([],[]);
sorted([-1,0,1],[-2,2]);

// function sorted(list1, list2){
//   for (var i=0; i<list1.length; i++) {
//     for (var j=0; j<list2.length; j++) {
//       if (list1[i] <= list2[j]) {
//         listSort.push(list1[i]);
//       }
//       else listSort.push(list2[j]);
//       }
//     }
//   }

function sorted(list1, list2){
  var merge = list1.concat(list2);
  merge.sort(compare);
  console.log(merge);
}
function compare(a,b) {
  return a-b
}
