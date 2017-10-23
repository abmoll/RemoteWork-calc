function largest(nums){
  var large = nums[0];
  for (var i=1; i <= nums.length; i++) {
    if (nums[i-1] > large) {
      large = nums[i-1];
    }
  }
  console.log("largest number is " + large);
}

largest([23,44.7,1,33,67,23.45,401,403]);
