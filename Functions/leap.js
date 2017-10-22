function leap(year) {


  if (year % 100 == 0) {
      if (year % 400 ==0) {
        console.log(year + " is a leap year");
      }
      else
        console.log(year + " is not a leap year");
  }
  else if (year % 4 == 0) {
    console.log(year + " is a leap year");
  }
  else
    console.log(year + " is not a leap year");
}

leap(2000);
leap(1600);
leap(1900);
leap(2016);
leap(1993);
