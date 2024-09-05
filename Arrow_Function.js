const usser={
     name : "Bikash",
    website : "Chai aur Code",
    result : function()
    {
            console.log(`${this.name} study at website ${this.website} Everyday  !!!`)
            //This refers to current context
            console.log(this)
    }
}
usser.result()
 usser.name="Sam"
usser.result()
console.log(this)

// function chai(){
//     let name = "Hituuu"
//     console.log(this.name)
//     //we can not use this as referance within a function 

//  }
// chai()

// ARROW FUNCTION------------

const AddNum=(num1,num2)=>
{
        return num1+num2
}
console.log(AddNum(4,5))

//Another Way 
const AddNum2=()=>(num1+num2)
console.log(AddNum(5,6))