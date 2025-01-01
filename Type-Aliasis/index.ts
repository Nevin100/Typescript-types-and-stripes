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