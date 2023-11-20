
// working with types
type Person = {
    name:string;
    age:number;
    isProgrammer?:boolean;
    friends : string[]

} 
const person:Person = {
    name:"Chris",
    age:30,
    friends:[]
}
person.isProgrammer = true
//accessing values in the object
person.name;
person.age
person.isProgrammer
const person2:Person = {
    name:"Christian",
    age:30,
    friends:[]
}
/* we used the optional chaining "?" to indicate that the value for isProgrammer is 
 optional*/

 console.log(person.name)
 console.log(person.age)
 console.log(person.isProgrammer)