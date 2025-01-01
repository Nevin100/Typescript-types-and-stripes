//Unions

// Unions are used to declare a type that can have one of several possible types Unions are useful when you want to represent a value that can be one of several types. (| --> symbol)

let password : string | number = 'hello' 
password = 45;

console.log(password);

const items: (number | string)[] = [
  1, 2, 3, 4, "Nevin", 6, 7, "hello", 9, 10,
];
console.log(items);
