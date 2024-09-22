const marvel_hero=["ironman","captain america","Hulk","thor"]
const dc_hero=["Batman","SuperMan","Flash","X-Men"]
marvel_hero.push(dc_hero)//For add another array in a array but as a element
console.log(marvel_hero);
marvel_hero.concat(dc_hero)/*In concat method we must store the array in
 another new array unless it will gave the 1st array */
const newarr=marvel_hero.concat(dc_hero)//The correct form of concat method 
console.log(marvel_hero);
console.log(newarr);
const arr1=[1,2,3,4,5]
const arr2=[3,2,4,5,6,7,8,9]
const spreadarr=[...arr1,...arr2]//spread operatorsymbol (...) it spread the given arr into a single arr
console.log(spreadarr);
const anotherarr=[1,2,3,[3,5,6,7],[4,5,6,7,[45,65,98,[2,3,5,4]]],45,564]
console.log(anotherarr.flat(Infinity))//it spread all the number depth arr into one single array
