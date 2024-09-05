const score=200
console.log(score)
const balance= Number(238783)
//By using permanent data type method we can change the type 
//data type by their specific method
console.log(typeof balance)
console.log(balance.toString())//Method--1--toString()
console.log(typeof balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(3))
// meth-2-.toFixed()-to fix given in precision  */
const hundreds=1000000
console.log(typeof hundreds)
console.log(hundreds.toLocaleString('en-IN'))
//For convert to Indian Number Style

//************* MATHS *************
console.log(Math.abs(-4));//For Absolute Value
console.log(Math.round(6.5464))//For round up Value
console.log(Math.floor(6.346))// Always Take the floor value
console.log(Math.ceil(5.464))//Take the num+1 when the number is Num+.somethig
console.log(Math.min(2,4,8,23,98))//Min Number 
console.log(Math.max(2,4,8,23,98))//Max Number
console.log(Math.pow(5,2))//For Power Of the number
console.log(Math.random())//A value come between 0 to 1
console.log(Math.random()*10)
/*After multiply 10 we get the number after decimal
point,It will be between 0-9*/
console.log((Math.random()*10)+1)
/*Here we add One for avoid 0 bcz the random num may
 get zero after decimal point  */

 const min=20
 const max=50
//for get number between min and max
 console.log(Math.floor(Math.random()*(max-min)+1+min))
