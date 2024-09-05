// Singleton Objects

//const tinderUser=new Object() //Singleton Obj

const tinderUser2={
    id:8018323
}    //Non Singleton Object or object literal
tinderUser2.id=231
tinderUser2.name="Bikash"
tinderUser2.isLoggedIn=false
console.log(tinderUser2)
const regularUser={
    email:"bikash@google.com",
    fullName:{                  /*here object create nested object within the object */
        userFullname:{
            firstName:"Bikash ",
            lastName:"Ghadai"
        }
    }
}
console.log(regularUser['fullName']['userFullname']['firstName'])

const obj1={1:"a",2:"b"}
const obj2={3:"c1",4:"d"}

// const obj3={obj1,obj2} // ceating problematic situation like array 
const obj3=Object.assign({},obj1,obj2) // it is the preferable method to add two object
const obj4=Object.assign({...obj1,...obj2})// same method as array and most common method used for adding two object
console.log(obj3)
console.log(obj4)

const user=[{
id: 1,
email : "B@gmail.com"
},
{

},
{

},
{
    id:2,
    email :"Ghadai@Doom.com"
}]
console.log(user[3].id)
console.log(user[3])
console.log(user[0].email)
console.log(Object.keys(tinderUser2))
//We can get all keys a object has by using this method 
console.log(Object.values(tinderUser2))
console.log(Object.values(user[3]))
//We can get all values a object has by using this method 
console.log(Object.entries(tinderUser2))
//By this method we can get all keys with values 
console.log(user[3].hasOwnProperty("id"))
//By this method we can confirm what kind of property the object has