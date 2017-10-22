

var first = [1,1,2,3,1,2,3];
var second = [1,4,4,4,2,2,4,4,4];

var uniqueArrayFirst = first.filter(function(elem, pos) {
  return first.indexOf(elem) == pos;
});

console.log(uniqueArrayFirst);

var uniqueArraySecond = second.filter(function(elem, pos) {
  return second.indexOf(elem) == pos;
});

console.log(uniqueArraySecond);
