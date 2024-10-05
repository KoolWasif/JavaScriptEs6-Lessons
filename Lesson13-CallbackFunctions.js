function callbackMethod(name,callback)
{
    console.log("Hello "+name);
    callback(name);
}

function welcome( name)
{
    console.log(`Welcome ${name}`);
}

function sayBye(name) {
    console.log(`Saying Bye ! ${name}`);
}

callbackMethod("Steve", welcome);
callbackMethod("alex", sayBye);

//The setTimeout function in JavaScript is used to schedule the execution of a function after a specified delay 
//in milliseconds). It allows you to execute code asynchronously after a certain period of time.

function printMessages(user, callback) {
  console.log("Welcome user %s", user);
  console.log("Now Printing info for %s...", user);
  setTimeout(() => {
    callback(user);
  }, 5000);
}

const someFun= ()=> console.log('some random function here...')

function printUserInfo(name) {
  console.log(`user has name ${name}`);
}

printMessages("Lisa", printUserInfo);
someFun()  //output line 30 and line 37 will be 
            // Welcome user Lisa
            // Now Printing info for Lisa...
            // some random function here...
            // user has name Lisa

//callback on objects
const users = {
  1: { name: "John Doe", age: 30 },
  2: { name: "Alex Smith", age: 25 },
};

function handleUserInfo(user, callback){
   user=users[user];
  if(!user) callback('user data not found',null)
  else callback(null,user)
}
function printUserInfo(error,user){
if(error) console.log(new Error(error).message) //use error.message if only want to print error rather than full error trace
else {
  console.log(`user has name:${user.name}`)
  console.log(`user has age:${user.age}`)
  }
}

handleUserInfo(2,printUserInfo) // Will print user information for user 2
handleUserInfo(5, printUserInfo);  // Will trigger the error for non-existing user
