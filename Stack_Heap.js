//LECTRURE--11

// 2 types of memory 
//1.stack(primitive)
//2.Heap(Non-primitive)
 myYoutubename="Ghadai@5678.com"
 anothername=myYoutubename
anothername="chaiorcode"
console.log(anothername)
console.log(myYoutubename)
/*In JS when we pass a value, original value never gets change
it passes a copy*/
let userone={
    email:"Ghadai.com",
    id:767897,
    ph:7735135856
}
let usertwo=userone
usertwo.email="dfhsgdfgajf"
console.log(usertwo.email)
console.log(userone.email)
/*when obj create and pass referance to another one
if we change the value of 2nd obj then 1st obj 
element will also chhange bcz 2nd has the ref of 1st ob
sol::create 2nd obj don't pass the referance*/

