//1-simple function
function someFunction() {
    console.log("I am some basic function");
  }
//2-function expression
const X= function(x,y) {return x+y};
console.log(X(5,5));
//3-Arrow function
const divFun=(x,y)=>x/y;
console.log(divFun(5,5))
//4-function Constructor
const subFun = new Function("a", "b", "return a-b");
console.log(`Result of subFun() is ${subFun(10, 5)}`);
//5-Immediately Invoked Function Expression(IIFE)/Self Invoked function
(function(){
    console.log('Immediately Invoked Function Expression')
})();
//self invoked arrow function
(()=>{
    console.log('I am self invoked arrow function')
})()
//6-generator function*
function * generateDigitSequence(){
    yield 1;
    yield 2;
}
const generator= generateDigitSequence() // this is mandatory because generateDigitSequence is a generator function,.. 
//which means it returns a generator object when called..
//so we need to store the returned generator object and then use its .next() method to iterate through the sequence.
console.log(generator.next().value)
console.log(generator.next().value)
//console.log(generator.next().value) // will return undefined because we have defined only two yields with static values
function* generateRandomNumber(min, max) {
    while (true) {
      yield Math.floor(Math.random() * (max - min + 1)) + min; // here each yield has a unique random value
    }
  }
//7-Anonymous function
let myArray = [1, 2, 3, 4, 5];
console.log(myArray.map((element)=>  element * 2)
);
//8-Recursive function printing names with out providing any value
const printNameWithOutLoop=(value,name)=>{
if(value<1) 
    return;
else
{
    console.log(name)
    printNameWithOutLoop(--value,name)
}

}
printNameWithOutLoop(4,'wasif')
//9- High order function
function addition(a, b) {
    return a + b;
  }
  function subtraction(a, b) {
    return a - b;
  }
  function arithmeticOperations(funName, a, b) {
    let result = funName(a, b);
    return result;
  }
  let result = arithmeticOperations(addition, 5, 5);
  console.log(result);
  