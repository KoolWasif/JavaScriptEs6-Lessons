// simple for loop
for (let index=0;index<=10;index++)
    {
        console.log(index)
    }
    
    //while loop
    let index=0
    while(index<=5)
    {
        console.log(index)
        index++
    }
//dowhile
let value=1
do{
    console.log(value);
    value++;
} while(value<1)


// Notes: myWords is a special type of varaiables called an array which will be coverd in detail in next lecture...
//For now just assume it is a collection of same type values combined together like nouns/words in the below example.

//please see image for loop variations.png for more clear understanding of driftnet variations of for loop discussed below

const myWords = ["car", "animal", "cart", "fan"];
for (const word of myWords) {
  console.log(word);
}
//for...in loop is used to iterate over the enumerable properties of an object. It returns the keys or property names.
const myUser={
    name: 'Jhon',
    age:42,
    gender:'male'
}
for (const key in myUser) {
        const element = myUser[key];
        console.log(`user has ${key} ${element}`);
}
///Most easiest way to REMEMBER is:
/// where there isa an array like array of numbers , array of words or even array of objects like in userdata.js
//Simply use for of loop
//where there is an object simply use for in loop 