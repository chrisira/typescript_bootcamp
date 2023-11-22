// working with Intersection
// a type can have a combined data types
type Person ={
    name:string;
    age:number;
}
type PersonWithId = Person & {id:string}

const person :PersonWithId = {id:"fjsdjflkdjkf",name:"Christian",age:30}