function leap(year){
  if (year % 4 == 0) {
    console.log(year + " is a leap year: true");
  }
  else
    console.log(year + " is a leap year: false");
}

leap(2000);
leap(1900);
leap(2016);
leap(1993);
