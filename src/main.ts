type Person ={
    name:string;
    skillLevel:"Beginner" | "Intermediate" | "Expert"
}

const person:Person = {name:"Chris",skillLevel:"Expert"}
printSkillLevel(person.skillLevel);

function printSkillLevel(skillLevel:"Beginner"|"Intermediate"|"Expert"){
    console.log(skillLevel);
}