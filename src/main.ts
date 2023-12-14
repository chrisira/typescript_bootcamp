type skillLevel = "Beginner" | "Intermediate" | "Expert" | "Master"
type Person ={
    name:string;
    skillLevel:skillLevel
}


const person:Person = {name:"Chris",skillLevel:"Expert"}
printSkillLevel(person.skillLevel);

function printSkillLevel(skillLevel:skillLevel){
    console.log(skillLevel);
}