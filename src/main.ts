type Person ={
    name:string;
    skillLevel:"Beginner" | "Intermediate" | "Expert" | "Master"
}
type PeopleGroupedBySkillLevel = {
    [index : string]:Person[]
}

const a : PeopleGroupedBySkillLevel = {
    'anystring':[{name:"Chris",skillLevel:"Beginner"}]
}

// other example (array)
const b =['Christian','IRADUKUNDA',true]

type A =(typeof a)[number]

// using object
 const names = {
    name:"Christian",
    age:35,
    isProgrammer:true
 }

 type B = (typeof a)[keyof typeof a]
