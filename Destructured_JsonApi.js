// Destructured 

const course = {
    coursename: "Js in Hindi",
    fee: "999",
    CourseInstructor: "Hiteshhh"
}

const {CourseInstructor} = course
//Destructrured of Object
console.log(CourseInstructor)

//Another way

const { CourseInstructor: Mastree } = course
//Optimize name
console.log(Mastree)

//API -Transfer own work to someone else

//JSON
{
    name: "Hitesh"
    Coursename: "Js Hindi"
    fee: "free"
}

//API Format !!
[
    {},
    {},
    {}
]