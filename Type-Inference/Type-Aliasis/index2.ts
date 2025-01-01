//Intersection Types:

//An intersection types is a way to combine multiple types into a single-type that includes all properties and methods of each constituent type.

type Person = {
  name: string;
  age: number;
}

type Employee = {
  id: number;
  title: string;
}

type MixType = Person & Employee;

const mix: MixType = {
  name: "Nevin",
  age: 20,
  id: 1,
  title:"Developer"
}

console.log(mix);