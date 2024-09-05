//Immediate Invoked Function   


(function chai(name){
    console.log(`I am ${name}`)
})("bky");
//1st bracket for function body and second one for Exicution

((name) => {
    console.log(`I am ${name} in Two`)
})("Bikash")
/*After write 1st fuction in this way U should give a ";" 
in the end that indicate You terminate the function */