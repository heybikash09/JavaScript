const coding=["js","java","python","ruby","cpp"]
const values=coding.forEach((item) => {
    console.log(item)
    //return 23;
});
console.log(values)
/*In this method it oviously print the value but it won't 
return anything  !!*/
const num=[1,2,3,4,5,6,7,8]
//filter method return value  
num.filter((n)=> {
    if(n>4)
    console.log(n)
})
//Another way of filter method !!
  const res=num.filter((n)=>n>4)
  console.log(res)

  const book=[{title:'Book One',genre:'Non-Fiction',publish:2000,edition:1981},
  {title:'Book Two',genre:'History',publish:1989,edition:1985},
  {title:'Book Three',genre:'Non-Fiction',publish:2000,edition:1995},
  {title:'Book Four',genre:'Science',publish:1981,edition:1990},
  {title:'Book Five',genre:'Fiction',publish:1985,edition:1981},
  {title:'Book Six',genre:'History',publish:1989,edition:2000},
  {title:'Book Seven',genre:'Science',publish:1981,edition:1981},
  {title:'Book Eight',genre:'Fiction',publish:2005,edition:2004}]
//History Book
  book.filter((bk)=>{
    if(bk.genre==="History")
    console.log(bk)
  })

  //Return the Books which are published after 2000
  book.filter((bk)=>{
    if(bk.publish>=2000)
    console.log(bk.title)
  })
    //USING OF DOUBLE MAP

  // const nums=[1,2,3,4,5,6,7,8,9]
  // const result=nums.map((nums)=>nums*10).map((nums)=>nums+2).filter((nums)=>nums>=40)
  // console.log(result)
  /*After using map method we can use further map 
  or any other method in that method */


//   //Reduce Method  !!!!!

  //Method Style !!!!
//   const initialVal=0;
//   const SumWithInitial=arr.reduce(
//     (accumulator,currentvalue)=>accumulator+currentvalue,initialVal);
//     console.log(SumWithInitial)

//     // 1st way---
//   const arr=[1,2,3,4,5]
//   const redres=arr.reduce(function(acc,curr)
//   {
//     console.log(acc)
//       return acc+curr
//   },10)
//   console.log(redres)

//   // 2nd way----
//   const redres2=arr.reduce((crr,cur)=>(crr+cur),0)
//   console.log(redres2)

// const data = [{name : "phone1", price : 100},{name : "phone2", price : 200},{name : "phone3", price : 300}]


// const totalAmount = data.reduce((ac,cv) => ac + cv.price,100);
// //1st iteration ac = 0 , cv = data[0]  ----> 0 + 100 ---> return 100
// //2nd iteration ac = 100 , cv = data[1]
// console.log(totalAmount);


// const nums=[1,2,3,4,5,6,7,8,9]
// const result=nums.filter((nums)=> nums==9)
//   console.log(result)
// const result2=nums.map((nums)=> nums==9)
//   console.log(result2)
