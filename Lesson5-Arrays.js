// //diffrent types of array
let numbersArray=[1,4,10,23,69]
let fruitsArray=['apple', 'banana', 'orange']
let mixedArray=[1,2 , 'cat' , 'c']
let language=['c++','c#' , 'java']

//push method
language.push('html')
for(let lang of language)
{
    console.log(lang);
}

//pop methos
let push_Language=language.pop()
console.log(push_Language)
for(let lang of language)
    {
        console.log(lang);
    }


//shift() removes first element from array and returns it
let fruit= fruitsArray.shift()
console.log(fruit)
//unshift() add element(s) at the starts af array
fruitsArray.unshift('watermelon', 'mango')
//foreach() used to iteatae over an array
fruitsArray.forEach(element => {
    console.log(element)
});

//splice method
let animals_Array= ['cat','diansour','camel']
animals_Array.splice(1,1,'elephant','lion');
animals_Array.forEach(element=>{
    console.log(element)
})
animals_Array.splice(4,0,'fish')
animals_Array.forEach(element=>{
    console.log(element)
})

//slice method
let myNumberArray=[45,65,72,84,98]
let mySlicedNumberedArray=myNumberArray.slice(1,3)
console.log(mySlicedNumberedArray)
console.log(myNumberArray)

//concat method
let wordsArray=['hi','doing']
let anotherWords=['fine', 'sam']
wordsArray=wordsArray.concat(anotherWords)
console.log(wordsArray.concat('?'))

//index of - returns the first occurance of an element
let colors=['red','green', 'white']
let index=colors.indexOf('green')
console.log(index)
colors.splice(1,0,'pink','blue','green')
console.log(colors.indexOf('green',colors.indexOf('green')+1))

//includes returns true if multiples elements are passed then if if any one is found then it will retun true
let nounArray=['boy','cat','elephant']
console.log(nounArray.includes('elephant','diansour'));