//  for Of loop-----!!!

//Arrays------

const arr=[1,2,3,4,5]
for(const n of arr)
    console.log(`element ${n}`)

//Objects-----
const ar1="hello world"
for(const ch of ar1)
console.log(`Each character ${ch}`)

//MAPS---------->>It is key value which hold key values
//It is hold only unique value It hold duplicate value at once

const map=new Map()
map.set('In','India')
map.set('USA','United States America')
map.set('Fr','France')
map.set('In','India')   //It doesn't hold this duplicate value
console.log(map)

//Use for of loop here

for(const [keys,value] of map)
{
    console.log(keys, ':-',value)
}
//For of loop can't use in object 
//For object another loop is use i.e (For in loop)
//For in loop bidefault always return keys in object and indexes in array  !!
//For in loop can't use by map !!!

const obj1={
    game1 : "NFS",
    game2 : "SpiderMan",
    game3 : "GTA 5"
}
for(const nm in obj1)
//console.log(nm)//in this method it return all the keys 
console.log(obj1[nm])

//Foreach loop

const coding=["js","ruby","java","python","cpp"]

coding.forEach(function (val)

{
console.log(val)
}

)

