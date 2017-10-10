console.log('this seems to work');
let userChoice = 0;

let paragraph = document.getElementById("result");
let one = document.getElementById("one");
let displayBox = document.getElementById('total');
let plus = document.getElementById('plus');
let two = document.getElementById('two');
let minus = document.getElementById('minus');
let equals = document.getElementById('equals');
let display = '';
let calcArray = new Array();
let index = 0;
let result = 0;
let num = 0;
let oper = '';

function addNumToDisplay() {
  total.innerHTML=display;
  num = Number(display);
  calcArray[index]=num;
}

function displayResult() {
  if (calcArray[index-2] == '+')
    result = result + calcArray[index-1];
  else if (calcArray[index-2] == '-')
    result = result - calcArray[index-1];
  else if (calcArray[index-2] == '/')
    result = result / calcArray[index-1];
  else if (calcArray[index-2] == '*')
    result = result * calcArray[index-1];
    total.innerHTML=result;
    index++;
}

//user chooses 1
one.addEventListener("click", function(){
  display = display + '1';
  addNumToDisplay();
});
two.addEventListener("click", function(){
  display += '2';
  addNumToDisplay();
});
three.addEventListener("click", function(){
  display += '3';
  total.innerHTML=display;
  num = Number(display);
  calcArray[index]=num;
});
four.addEventListener("click", function(){
  display += '4';
  addNumToDisplay();
});
five.addEventListener("click", function(){
  display += '5';
  addNumToDisplay();
});
six.addEventListener("click", function(){
  display += '6';
  addNumToDisplay();
});
seven.addEventListener("click", function(){
  display += '7';
  addNumToDisplay();
});
eight.addEventListener("click", function(){
  display += '8';
  addNumToDisplay();
});
nine.addEventListener("click", function(){
  display += '9';
  addNumToDisplay();
});

function setResultIfIndexOne(){
  result = calcArray[index-1];
  total.innerHTML=result;
  index++;
}

function clearAll() {
  for (index=0; index < calcArray.length; index++) {
    calcArray[index]=0;
  }
  index = 0;
}

//user chooses plus
plus.addEventListener("click", function(){
  display='';
  //only if another number is entered prior to hitting plus, do this
  if (typeof (calcArray[index]) == 'number') {
    index++;
    calcArray[index]='+';

    if (index != 1) {
      displayResult();
    }
    else if (index == 1) {
      setResultIfIndexOne();
    }
  }
  });

  //user chooses minus
  minus.addEventListener("click", function(){
    display='';
    //only if another number is entered prior to hitting plus, do this
    if (typeof (calcArray[index]) == 'number') {
      index++;
      calcArray[index]='-';

      //calcResult function
      if (index != 1) {
        displayResult();
      }
      else if (index == 1) {
        setResultIfIndexOne();
      }
    }
    });
    //user chooses divide
    divide.addEventListener("click", function(){
      display='';

      if (typeof (calcArray[index]) == 'number') {
        index++;
        calcArray[index]='/';
        //only if another number is entered prior to hitting plus, do this

          //calcResult function
          if (index != 1) {
            displayResult();
          }
          else if (index == 1) {
            setResultIfIndexOne();
        }
      }
    });

      //user chooses multiply
      multiply.addEventListener("click", function(){
        display='';

        if (typeof (calcArray[index]) == 'number') {
          //only if another number is entered prior to hitting plus, do this
            index++;
            calcArray[index]='*';

            //calcResult function
            if (index != 1) {
              displayResult();
            }
            else if (index == 1) {
              setResultIfIndexOne();
          }
        }
      });

  //user chooses equals: just display total and add total into current array index
  equals.addEventListener("click", function(){
    display='';

    if (typeof (calcArray[index]) == 'number') {
      //only if another number is entered prior to hitting plus, do this
      if (index != 0) {
        index++;
        //calcArray[index]='=';
        if (calcArray[index-2] == '+')
          result = result + calcArray[index-1];
        else if (calcArray[index-2] == '-')
          result = result - calcArray[index-1];
        else if (calcArray[index-2] == '/')
          result = result / calcArray[index-1];
        else if (calcArray[index-2] == '*')
          result = result * calcArray[index-1];

          total.innerHTML=result;
        // reset index to 0 and add current result
          clearAll();
          calcArray[index]=result;
      }
      else if (index == 0) {
        result = calcArray[index];
        //calcArray[index]='=';
        total.innerHTML=result;
      }
    }
    });
    //user chooses AC (all clear)
    allClear.addEventListener("click", function(){
      total.innerHTML='0';
      clearAll();
    });
    //user chooses clear
    clear.addEventListener("click", function(){
      total.innerHTML='';
    });
