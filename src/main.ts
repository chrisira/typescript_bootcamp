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