// Destructuring in JavaScript is like taking apart a structured item (such as an array or object) and pulling out specific pieces that you want. It helps you easily extract values 
// from arrays or properties from objects and store them into individual variables.
const fruits= ['apple','orange','banana']
const [firstFruit,secondFruit,thirdFruit]=fruits
console.log(`First Fruit:${firstFruit}`);
console.log(`Second Fruit:${secondFruit}`)
//Destructuring using the spread operator
const languages=['Java','C#', 'Python','Ruby', 'Swift']
const [java,c,...otherLanguages]= languages;
console.log(java);
console.log(c)
otherLanguages.forEach(lang=>{
    console.log(lang);
})

//Destructuring the objects
const personInfo={
      personName:'Jhon',
      age:35,
      city:'London'
}

const {personName,...otherInfo}=personInfo
//Note we can't use foreach() here as forEach() works for arrays, not for objects.
for(let key in otherInfo){
    console.log(otherInfo[key])
}

const actor = {
    name: "Tom Hanks",
    age: 65,
    movies:["Forrest Gump", "Cast Away", "Saving Private Ryan"],
  };

const {name,...otherActorInfo}=actor
//further destructuring
console.log(...otherActorInfo.movies)

// Destructuring on Nested Objects
const playerInfo={
    id: 1,
    profile: {
      playerName: 'Alice',
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
    },
   
}
const {id,profile:{playerName,location:{country}}}=playerInfo
console.log(id)
console.log(country)