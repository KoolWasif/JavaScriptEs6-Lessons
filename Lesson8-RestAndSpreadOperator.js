// rest operator
const printInfo = (firstName,lastName,age,...otherInfo)=>{
console.log(`person has first name:${firstName}`);
console.log(`person has last name: ${lastName}`);
console.log(`person has  age: ${age}`);
logOtherInfo(otherInfo)
//console.log(`person has other Info:${otherInfo}`)
}
const logOtherInfo = (otherInfo)=>{
otherInfo.forEach(someInfo => {
    console.log(someInfo)
});
}

printInfo('steve' ,'jerrod' , 30, 'plays hockey' , 'likes Batman');
//another way
printInfo('micheal', 'frances' , 36 , ['plays soccer', 'likes superman'])

//spread operator (like un packing things)
const someFruits=['apple','banana', 'orange']
const moreFruits=['peach',...someFruits,'mango']
console.log(moreFruits)// Output: ['grape', 'apple', 'banana', 'orange', 'pineapple']

//spread operator on objects
const person = { name: 'John', age: 30 };
const updatedPerson = { 
    ...person, 
    city: 'New York' };
console.log(updatedPerson);

//spread can be used to copy contents of an array
const chocolateChipCookies = ["Chocolate Chip Cookie","Chocolate Chip Cookie","Chocolate Chip Cookie"];
const oatmealCookies = ["Oatmeal Cookie", "Oatmeal Cookie"];
let allCookies = [...chocolateChipCookies, ...oatmealCookies];
console.log(allCookies);

//passing arguments in a function
let personEssay = (firstName, lastName, age) =>
    `Person has first name ${firstName} last name ${lastName} and is ${age} years of age`;
  console.log(personEssay(...["steve", "jerrad", 13]));

