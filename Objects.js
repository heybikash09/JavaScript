 //Object-->>1.Singleton  2.Object Literals

 //Object Literals
// const MySym=Symbol("key1")
const MySym=Symbol("key1")
const MyObj={
    name:"Bikash Ghadai",//In this line name is one type of string
    age:20,
    MySym2:"MyKey1",
    /*We declare MySym for symbol but type of MySym is string  */
   // [MySym]:"MyKey2",// Here MySym is a Symbol bcz it written in a square bracket
    id:80183,
    email:"bikashghadai5856@gmail.com"
}
console.log(MyObj.name);

console.log(MyObj["name"])
//this type of mehthod calling is preferable bcz name is string ::

console.log(MyObj.MySym2)
console.log(typeof MyObj.MySym2)
console.log(MyObj[MySym])
console.log(typeof MySym)
MyObj.email="bikashghadai@google.com"// its for redefine object's element
console.log(MyObj.email)
 Object.freeze(MyObj)//This method do constant to all object element
MyObj.email="bikashghadai@microshoft.com"
console.log(MyObj.email)//Bcz of freeze method here email won't change !!

//Create a function

MyObj.greeting=Function();{
    console.log("Hello Good Morning !!!!");
}
MyObj.greeting2=Function()
{
    console.log(`Hello  ${MyObj.name} sir Good Morning `)
}
 console.log(MyObj.greeting)
  console.log(MyObj.greeting2)

const bky = console.log;

bky("i am here");
MyObj['year']=2024
MyObj.year=2022
/*We can add item in both way */

bky(MyObj)