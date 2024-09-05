//Array

const arr1=[1,2,3,true,false,"Bkkyy"]
//In Js a array can contain different data type element
console.log(arr1[4])
const myheros=["shaktiman","Captain america","IronMan"]
const arr2=new Array(1,2,3,4)//Another way of declare array

// ARRAY METHODS

arr1.push(89)//for add or push a value into the array
arr1.push(12735)
console.log(arr1)
arr1.pop()// for pop or delete a element from the array
console.log(arr1)
arr1.unshift(9,5,3)// Method, For add a element at the 1st 
console.log(arr1)
 arr1.shift()// For delete element from the 1st of the array
 console.log(arr1)
 console.log(arr1.includes(true))
 //Type-boolean,Method includes() uses for check the value is in the array or not
 console.log(arr1.indexOf(true))
 //Method for check index of the Element

 const newarr=arr1.join()
 //It convert whole array to string and assign to a variable but the original array can't convert to string
 console.log(arr1)
 console.log(newarr)
 console.log(typeof newarr)
 // slice()  splice()

 console.log("A",arr1)
 //For naming the name of the array
 const myn1=arr1.slice(1,5)
 //Method use for slice a array (start,end+1)
 console.log(myn1)
 console.log("B",arr1)
 const myn2=arr1.splice(1,3)
 //splice(start,end)
 /* After using splice it slice the array from start to end
 and delet the splice element from the original array */
 console.log("C",arr1)
 console.log(myn2)

