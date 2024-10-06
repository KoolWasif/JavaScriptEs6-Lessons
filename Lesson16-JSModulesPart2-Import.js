// Before executing this program please execute following commands in terminal
// npm init or npm init -y
//once package.json file is generated please add "type": "module",

//1-import a default export
import getAllUsers from './Lesson16-JSModulesPart1-Export.js'
getAllUsers();

//2-importing a Named export
import {p} from './Lesson16-JSModulesPart1-Export.js'
console.log(p.playerName)

//3-importing a named export and renaming it
import { sayHello as hello } from './Lesson16-JSModulesPart1-Export.js';
 hello('steve')

 
 
 //4-  if there are a lot of modules to import then we can import them at once
 //Consider there are two arrays of objects in userdata.js 
 //So we imported them like
 import * as data from './resources/userdata.js'
 data.users.forEach((item)=>{
    console.log(item.name)
 })

 for(const item of data.items){
    console.log(item.name)
 }
