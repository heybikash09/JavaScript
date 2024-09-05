//if
const isUserloggedIn=true
if(2==2)
{
console.log(`is true  !!!`)
}
if(isUserloggedIn){
    console.log(`It is logged in `)
}
// <,>,<=,>=,==,!=,=== Relational Operator
// === it is also check type -->its preferable 
if(2=="2")
{
    console.log('Exicuted same!!')
}
if(2==="2")
    console.log("Same type ")
else 
    console.log("Not Same type  !!!")
    // if case using just the variable name !!
    const userEmail="Ghadai501@.com"
    const userEmail2=""

    // if(userEmail)
    // console.log(`Got the user email ${userEmail}`)
    if(userEmail2)
    console.log(`Got the user email ${userEmail2}`)
    else
     console.log("Didn't got the userEmail   !!!")


     //Falsy Value --->>flase,BigInt 0n,0,-0,"",null,undefined,NaN

     //Thuthy Value--->>"0","false"," ",{},[],funtion(){}

     let userArray=[]
     if(userArray.length===0)
     console.log("Array is empty !!")
    else
    console.log("There is must some value available  !!!")

    let userObj={}
    if(Object.keys(userObj).length===0)
    {
        console.log("Object is empty !!!")
    }
    else
        console.log("Object is not Empty !!!")

    //Nullish Coalescing Operator (??): null undefined
    //it give the 1st value if the 1st value is null,0,undefined or like this then it take 2nd one

    const val=null ?? 10
    console.log(val)
    const val1=5 ?? 6
    console.log(val1)
