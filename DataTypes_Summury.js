//Primitive Data Types 
// 7 types : string ,Number-->(2-53digit),Boolean ,null ,Undefined ,Symbol,Bigint

const score=100
const scoreValue=100.3

const isLoggedIn=false
const  outsideTemp=null

/*The value of the variable null , null is a object   */
let useEmail; /* undefined means the has not initialize to it   */

const id=Symbol('123')  /* Unique */
const anotherId=Symbol('123')
console.log(id==anotherId)
const bigNumber=43856846584658568n
/*if we add n in a number 
 then it's data type is bigint */
console.log(typeof bigNumber) //Another way console.log(typeof(bigNumber))
// Referance (Non primitive)

// Array ,object ,Function 
const heros =["shanket" , "naagraj","Jishan"]
// here heros is array
let myObj={
    name:"hitesh",
    age:20
}
// we call all element of a object by just using obj name as before
    const myFunction=function(){
    console.log("Hello World !!")
}
myFunction();
console.log(typeof anotherId )
console.log(typeof id)