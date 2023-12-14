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

// other example
const b =['Christian','IRADUKUNDA',true]

type A =(typeof a)[number]