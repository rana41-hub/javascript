const display = document.querySelector("#display");

const clear = document.querySelector("#clear");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const result = document.querySelector("#result");

one.addEventListener("click" , function(e) {

  display.value += "1";
});
two.addEventListener("click" , function(e) {

  display.value += "2";
});
three.addEventListener("click" , function(e) {

  display.value += "3";
});
four.addEventListener("click" , function(e) {

  display.value += "4";
});
five.addEventListener("click" , function(e) {

  display.value += "5";
});
six.addEventListener("click" , function(e) {

  display.value += "6";
});
seven.addEventListener("click" , function(e) {

  display.value += "7";
});
eight.addEventListener("click" , function(e) {

  display.value += "8";
});
nine.addEventListener("click" , function(e) {

  display.value += "9";
});
plus.addEventListener("click" , function(e) {

  display.value += "+";
});
minus.addEventListener("click" , function(e) {

  display.value += "-";
});
multiply.addEventListener("click" , function(e) {

  display.value += "*";
});
divide.addEventListener("click" , function(e) {

  display.value += "/";
});
clear.addEventListener("click" , function(e) {

  display.value = "";
});
result.addEventListener("click" , function(e) {

  try {

    display.value = eval(display.value);
  }
  catch(error) {

    display.value = "Error";
  }
});