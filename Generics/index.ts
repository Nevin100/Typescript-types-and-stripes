//Generics :

//In typescipt, generics allow yu to create reusable components that can work with variety of types without duplication of code

function uniqueType<T>(item: T, defaultValue: T): [T , T]{
  return [item, defaultValue];
}

//String :
const res100 = uniqueType<string>("Hello", "Nevin");
console.log(res100);

//Number :
const res101 = uniqueType<number>(20, 45);
console.log(res101);

//Boolean :
const res102 = uniqueType<boolean>(true, false);
console.log(res102);

//Interface :

interface Dog{
  name: string;
  breed: string;
}

const dog1 = uniqueType<Dog>(
  { name: "Buddy", breed: "Golden Retriever" },
  { name: "Max", breed: "Poodle" }
);

console.log(dog1);