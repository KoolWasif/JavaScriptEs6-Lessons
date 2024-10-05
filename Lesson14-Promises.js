const myFirstPromise= new Promise((resolve,reject)=>{
    const success=false //can be a async function like setTimeOut
    if(success) resolve('Promise resolved with vale:'+success)
    else reject(`Promise rejected with value ${success}`)
  })
  
  myFirstPromise.then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.error(new Error(error).message)
  })

///promise with callbacks
let promise = new Promise((resolve, reject) => {
  let number=Math.random()
  setTimeout(() => {
    if(number>0) resolve(`promise resolved with value:${number}`)
    else reject(`promise rejected with value: ${number}`)
  }, 5000);
  });
  promise
    .then((result) => {
      console.log("promise is fulfilled", result);
    })
    .catch((error) =>
      console.error("Promise can not be fulfilled with error", error)
    );
//Practice Write a program that picks a random integer from the given array and returns the resolved promise if its even
const someArray=[1,3,4,5,9,52,54,36,32,45,23,27,65,39,25,42]
let evenPromise=new Promise((resolve,reject)=>{
    let someRandom=Math.floor(Math.random()*(0,(someArray.length-1)))
    let number=someArray[someRandom]%2
    console.log(number)
    if(number===0) resolve('Promise is resolved')
    else reject(`promise is rejected due to value ${number}`) 
}).then((result)=>console.log(result))
.catch((error)=>console.error(error))

let evenNumberPromiseFun=(number,delay)=>{
 return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(number%2===0)  resolve(`Promise is resolved with value ${number}`)
        else reject(`Promise is rejected due to value ${number}`) 
       }, delay);
  }) 
}
// Nested Promise chaining Hell to code :) Also called call back hell
evenNumberPromiseFun(20,100)
.then((result)=>{console.log(result)
    evenNumberPromiseFun(10,50)
        .then((result)=>{console.log(result)
            evenNumberPromiseFun(5,25)
                .then((result)=>{console.log(result)})
            .catch((error)=>{console.error(error)})})
    .catch((error)=>{console.error(error)})})
.catch((error)=>{console.error(error)});

/// better version should be..
evenNumberPromiseFun(20, 100)
  .then((result) => {
    console.log(result);
    return evenNumberPromiseFun(10, 50); // Return the promise for chaining
  })
  .then((result) => {
    console.log(result);
    return evenNumberPromiseFun(5, 25); // Return the next promise for chaining
  })
  .then((result) => {
    console.log(`Final Result ${result}`);
  })
  .catch((error) => {
    console.error(error); // This will catch any error from the entire chain
  });


let promise1= ()=>{return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Promise 1 is resolved')
  },5000)
}
)}

let promise2=()=>{ return new Promise((resolve,reject)=>{
  setTimeout(()=>{resolve('Promise 2 is resolved')},10000)
})}

let promise3=()=>{ return new Promise((resolve,reject)=>{
  setTimeout(()=>{resolve('Promise 3 is resolved')},15000)
})}

let promise4=()=>{ return new Promise((resolve,reject)=>{
  setTimeout(()=>{reject('Promise 4 is rejected')},2000)
})}

//promise.all() takes an iterable array of promises and waits until all the promises are resolved, with an array containing all the resolved 
//promises result ser  reject if any of them fail
Promise.all([promise1(),promise2(),promise3()]).then((allResults)=>console.log(allResults.length))
.catch((error)=>console.error(error))

//promise.allSettled() Wait for all the promises to settle (either fulfill or reject), regardless of their outcomes.
Promise.allSettled([promise1(),promise2(),promise3(),promise4()]).then((resultSet)=>{
  resultSet.forEach((result)=>{
    if(result.status=='fulfilled') console.log('Promise is fulfilled'+result.value)
    else console.error('Promise is rejected due to'+result.reason)
  })
}).catch((error)=>console.error('All promises rejected'+error))

//Promise.race() waits until any of the given promises is fulfilled (either resolved or rejected)
Promise.race([promise1(),promise2(),promise3(),promise4()]).then((result)=>{
  console.log(result)
}).catch((error)=>console.error(error))


//Promise.any() - any of the promises in the iterable resolved, and it is rejected if all of the promises are rejected.
Promise.any([promise1(), promise2(), promise3(), promise4()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));