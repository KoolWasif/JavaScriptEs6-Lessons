
// if statement executes a block of code if a specified condition is true.
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

//if else statement runs one block of code if the condition is true, and another block if it is false.
let gender= 'Male';
if (gender=='Male') {
  console.log("You are Male.");
} else {
  console.log("You are Female");
}

//if...else if...else checks each condition in order, and executes the corresponding block when a condition is true.
age=17
if (age < 13) {
  console.log("You are a child.");
} else if (age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

//switch statement: Compares a value against a list of values and runs the corresponding block of code.
//if no match is found then default is executed
let day = 7;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}
