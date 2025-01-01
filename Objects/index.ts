//Object:

//An Object in typeScript is a structured data type that represents a collection of properties, each with a key and an associated value
//The properties of objects can have specific Type and the object itself can be annotated with a type , often defined as an interface or type alias

const person: { firstName: string, lastName: string, age: number } = {
  firstName: "Nevin",
  lastName: "Bali",
  age:20,
}

console.log(`FirstName : ${person.firstName}, LastName : ${person.lastName}, age:${person.age}`);

//function params : 
function printUser(): { name: string, age: number; location: string } {
  return {
    name: "Nevin",
    age: 20,
    location: "India",
  }
}

const res = printUser();
console.log(res);