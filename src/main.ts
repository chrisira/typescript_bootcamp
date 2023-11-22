// working with Intersection
// a type can have a combined data types
type Person ={
    name:string;
    age:number;
}
type PersonWithId = Person & {id:string}

const person :PersonWithId = {id:"fjsdjflkdjkf",name:"Christian",age:30}

// using interface

interface Person2{
    name:string;
    age:number;
}
interface PersonWithId2 extends Person2 {id:string}

const person2 :PersonWithId = {id:"fjsdjflkdjkf",name:"Christian",age:30}


