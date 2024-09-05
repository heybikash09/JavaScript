//  //Dates  
//  let myDate=new Date()
//  console.log(myDate.toString())
//  //Method of date String

//  console.log(myDate.toDateString())
//  console.log(myDate.toLocaleDateString())
//  console.log(myDate.toTimeString())
//  console.log(myDate.toLocaleTimeString())

//  let myCreateDate=new Date()
//  //Date type -->>1. (Year,Day,Month) or (year,month,day)
//  //Date type -->>2.(yy-mm-dd)
//  //Date start from 0 to 6
//  //Month start from 0 to 11 :: here given month 10 means it november 
//  console.log(myCreateDate.toDateString())
 
 let myTimeStamp=Date.now()
 console.log(myTimeStamp)//it provide time in mili second
 //console.log(myCreateDate.getTime())
 console.log(Date.now())
 console.log(Math.floor(Date.now()/1000))//1000 divides for convert mili sec to second
const  todayDate=new Date()
console.log(todayDate.toLocaleTimeString().substring(0,5))
console.log(todayDate.getMonth()+1)
console.log(todayDate.getDay())
console.log(todayDate.getFullYear())
