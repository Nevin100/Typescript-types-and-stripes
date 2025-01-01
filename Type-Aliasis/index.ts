//Type-Aliasis  :
// A type-Aliasis is a way to create a new name for an existing type. It allows you to define a custom type and give it a more meaningful and descriptive name.

type User = {
  name: string;
  age: number;
}

const printUserInfo = (user: User) => {
  return `Name : ${user.name} , Age : ${user.age}`;
}

const response = printUserInfo({ name: "Nevin", age: 20 });
console.log(response);


// Optional Properties
type person = {
  name: string;
  age: number;
  address?: string;
}

const printPersonInfo = (person: person) => {
  return `Name : ${person.name} , Age : ${person.age} , Address : ${person.address}`;
}

//no address member mentioned
const response2 = printPersonInfo({ name: "Nevin", age: 20 });
console.log(response2);

//all the attributes are mentioned
const response3 = printPersonInfo({
  name: "Nevin", age: 20, address:"nevinbali100@gmail.com"
})
console.log(response3);
