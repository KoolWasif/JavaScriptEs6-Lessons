 async function task1() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('task 1 is completed')
        },10000)
       }) 
 }

 async function task2() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('task 2 is completed')
        },5000)
       }) 
 }

 async function task3() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('task 3 is completed')
        },2000)
       }) 
    
 }
let startExecution=async () => {
 await task1().then((result)=>console.log(result)) //10 seconds
 await task2().then((result)=>console.log(result)) //5 seconds
 await task3().then((result)=>console.log(result)) //2 seconds
}

startExecution();

///REMEMBER async function always returns a promise whether you specify it or not
async function additionFunction(num1, num2) {
    setTimeout(() => {
        console.log(`Result of Addition is ${num1 + num2}`);
      }, 5000);
 
  }
  async function subtractionFunction(num1, num2) {
      setTimeout(() => {
        console.log(`Result of Subtraction is ${num1 - num2}`);
      }, 1000);
    
  }

  //execute arithmetic operations  addition first then subtraction
  async function executeArithmeticOperations() {
    additionFunction(10, 5)
    subtractionFunction(10, 5)
  }

  executeArithmeticOperations()