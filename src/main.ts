// working with unions
// a variable can be either a string or a number or any other defined type
let id : string | number
// we can re-assign the id as a number or a string
id = "1"
id=7

// example2: using unions on default values
type Todo ={
    name:string,
    status:"complete" | "in progress" | "draft"
}

// if we try to initialize a variable we have to only work with pre-defined statuses

const todo:Todo = {name:"Fix bugs",status:"complete"}