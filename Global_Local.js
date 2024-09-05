//Local and Global Scope !!!!!
var b=300  //This variable placed in global block
if(true)   /*  Paranthesis of if is a loacal block  */
{
    var a=30    /* Local variable doesn't access in Global block but global variable do in Local Variable*/
    const b=40
    let c=1000
    console.log(b)
}
console.log(b)

function One(){
const ussername="Bikash"
Two()
    function Two(){
                 const website="Chai aur Code"
                 console.log(ussername)
                 console.log(website)
                }             
console.log(ussername)
}
One()

console.log(AddOne(7))
function AddOne(num)
{
    return num+1
}


//console.log(res(3)) //We can't call a variable without declaration
const res=function AddTwo(num)
{
    return num+2
}
console.log(res(3))
