/// back tick notation/template literal with `
let printInfo = (name, age) => `I am ${name} and I am ${age} years old`;
console.log(printInfo("steve", 30));

//%s operator
let myBio = (name, age) =>
  console.log("I am %s and I am %s years old", name, age);
myBio("alex", 20);