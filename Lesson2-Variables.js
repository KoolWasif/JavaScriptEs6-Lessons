
//variabled declared with var can be redeclared
var rdeclareVar= 10;
//console.log(rdeclareVar)
var rdeclareVar='abc'
//console.log(rdeclareVar)

//var can be initialized again
var myInitialvar=45;
myInitialvar='456';
//console.log(myInitialvar)

//var is a function scoped
function exampleVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // Outputs 10 since x is declared using var keyword which is function scoped
  }
  exampleVar();

//let can not be redeclared 
let myVal=5
//let myVal=10 will show syntax error

//let can be initialized again
myVal=15

//let is a blocked scope
function exampleLet() {
    if (true) {
      let y = 20;
    }
    console.log(y); // Throws a ReferenceError: y is not defined
  }
  
  exampleLet();

//const is similar to let in regards to scope. The only diffrence is const can not be reintialized
const myNumber = 50;
//myNumber=60 // will throw TypeError: Assignment to constant variable.
console.log(myNumber)