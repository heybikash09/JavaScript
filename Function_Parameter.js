function AddTwoNum(num1,num2){/* *Creation of a function*/
    console.log(num1+num2);
}
// AddTwoNum(8,5)
function AddTwoNum2(num1,num2)
{
    console.log(num1+num2);
}
AddTwoNum2(5,"q")/*If you pass a num and string js cosidered both as a string */
//Fuction store 
function AddTwoNum2(num1,num2)
{
    // console.log(num1+num2);
    // let res=num1+num2
    return num1+num2
}
const result=AddTwoNum2(4,9)
console.log("Result :: "+result)

function LoggedInUsser(name)
{
    return `${name} just logged in this account !!!`
}
console.log(LoggedInUsser("Bkyy"))

//Default parameter

function AssignName(name="undefined")
/*if user will give a name it override the name unless 
it give the assign name to the fuction*/
{
    if(name==undefined)
    {
    console.log("Plzzz Give name for assign !!!")
    return
    }
    else
        return `${name} is name of the candidate !!!`
}
console.log(AssignName())

//Function with object and array

function CalKartTotal(val1,val2,...amount)
/*this spread operator store the all value in amount as array ,
1st and 2nd input store in corresponding variable
 */
{
    return amount[0]+amount[1]+amount[2]+val1+val2
}
console.log(CalKartTotal(200,300,400,900,100))

//Giving object to a function 

const anyobject={
    ussername : "Bikash",
          age : 19,
       height : 6
}
function Character(char)
{
    return `Name : ${char.ussername} 
            age : ${char.age} 
            height : ${char.height}`
}
console.log(Character(anyobject))