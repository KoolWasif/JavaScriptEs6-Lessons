// map() - maps 
let numbersArray=[1,2,3,4,5]
numbersArray.map(element=>{
    console.log(element*5);
})
let temprature=[42,45,28,32]
let fahToCel=(fah)=>(fah-32)*(5/9)
console.log(temprature.map(fahToCel))

//filter method()
let items = [
    {
      name: "oreo",
      category: "biscuits",
      price: 50,
    },
    {
      name: "Lemon Shortbread",
      category: "cookies",
      price: 15,
    },
    {
      name: "Almond Biscotti",
      category: "biscuits",
      price: 18,
    },
    {
      name: "Gingerbread",
      category: "cookies",
      price: 22,
    },
  ];

//filter all items that have category cookies
console.log(items.filter(item=>item.category=='cookies'))

// reduce method
const array1 = [1, 2, 3, 4];
const sumofArray = array1.reduce((acc,num)=>acc+num,0) // 0 + 1 + 2 + 3 + 4
console.log(sumofArray);

//Question: sum of price of all items having category cookie
let cookieArray=items.filter(item=>item.category=='cookies')
let allCookiePrice=cookieArray.reduce((acc,cookie)=>acc+cookie.price,0)
console.log(allCookiePrice)

//Question return the max number in an array
console.log(numbersArray.reduce((max,num)=>{
    if(num>max) return num
    else return max;
},numbersArray[0]))

//every method
const minThresholdValue=16
console.log(numbersArray.every((num)=>num>=minThresholdValue))
numbersArray.push(minThresholdValue)
console.log(numbersArray)

//some()
console.log(numbersArray.some((num)=>num>=minThresholdValue))

//find
console.log(numbersArray)
numbersArray.splice(numbersArray.length, 0, 16, 20,25);
console.log(numbersArray)
console.log(numbersArray.find((number)=>number==minThresholdValue))

//reverse() --  CAREFUL!!!! changes the original array.
const numbers=['one','two','three', 'four']
numbers.reverse()
console.log(numbers)

//sort() CAREFUL!!!! changes the original array. if dont want to update the orignal array just use toSorted()..
const unSortArray=['a','f','c','b']
unSortArray.sort()
console.log(unSortArray)
//Note: sorting is based converting elements in to strings so see line 81 comments
const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);  // will print [ 1, 100000, 21, 30, 4 ]