//Introduction:JavaScript modules are a way to organize and structure code. 
// They allow developers to break their code into smaller, reusable pieces. 
// You can think about them as smaller pieces of code that you can import and..
// export between different parts of an application.
//More Information on following link..
// https://www.freecodecamp.org/news/javascript-modules/

// 1- Default export
function getOneUser(){
    console.log('inside get One User function')
}

//export default getAllUser //Note there can only be one default export in a JavaScript file that why this line is commented out

/// We  can also export before the declaration, like this:
export default function getAllUsers(){
    console.log('inside get All Users function')
}

//2- Named Export
export function sayHi(user) {
    console.log(`Hi, ${user}!`);
  }
  
  export function sayHello(user) {
    console.log(`Hello, ${user}!`);
  }
  
//export {sayHello,sayHi} // Named exports allow you to share multiple modules from a file

const person={
    personName:'Jhon',
    age:35,
    country:'USA'
}

export {person}

//renaming a Named Export
const player={
    playerName: 'Jimmy',
    age:36,
    country: 'Canada',
}
export {player as p}

//Similarly like default export you can export before declaration
 export function someFun(){console.log(`I am a named export function exported before declaration`)}

 //Next we will discuss how to import a Module