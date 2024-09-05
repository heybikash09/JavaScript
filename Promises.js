const promiseOne=new Promise(function(resolve,reject){ 
//Do asyncronous task
//Db calls,cryptography,networkCall
setTimeout(function(){
    console.log("ASync Task is completed !!");
    resolve()//By this method it connect with then method 
},1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed !!!");
})


// Another syntax of resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn Task 2")
        resolve()
    },1000)
    
}).then(function(){console.log("Task 2 completed !!")})


// //Third Promise !!!

const promiseThird=new Promise(function(resolve,reject){
    setTimeout(function()
    {
        console.log('Promise three give the argument to then :: ')
        resolve({usserName:"Bikash",email:"abc56@ml.com"})
    },1000)
})
promiseThird.then(function(usser)
{
    console.log(usser)
    console.log(`${usser.usserName} is good boy `)
})

// //Four Promise

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=false
//         if(!error)
//         resolve({usserName:"Jamess",password:"3233"})
//         else
//         reject("Error detected  !!")
//     },1000)
// })
// promiseFour.then((usser)=>{/*It take the resolve value from Promise function If we have to return something from here 
//     we need to take one more "then" immediately after the end of this function */
//     console.log(usser)
//     return usser.usserName
// }).then((name)=>{   
//     console.log(name)
// }).catch((error)=>{  //It take the reject value from Promise function 
//     console.log(error)
// }).finally(()=>console.log("Promise either resolve or rejected !!!")) //Finally execute either resolve and  reject execute or not 

// //async function another way 

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=true
//         if(!error)
//         resolve({usserName:"Johnn",password:"90901"})
//         else
//         reject("Error detected in promise five !!")
//     },1000)
// })

// // async function consumePromiseFive(){
// //     const response=await promiseFive    //it take resolve value from Promise function but it can't take reject value 
// //     console.log(response)
// // }

// //Another syntax for reject exception  !!
// async function consumePromiseFive()
//     {
//         try{
//         const response=await promiseFive    
//         console.log(response)
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
// consumePromiseFive()

// async function getAllUser(){
//     try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/')
//      const data=await response.json()
//      console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }

      //  return  data/

// // }
// // const data = getAllUser()

// const obj = {
//     name : "Lalit",
// }

// const {name:x} = obj;
// console.log(x);
