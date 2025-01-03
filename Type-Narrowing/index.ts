//Type Narrowing :

//it is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe code

//1.) Type - Guards :
//It is a mechanism that help TypeScript understand and narrow down the types more precisely, One common type guard is typeof Operator

type MyType = string | number;

const exampleFunction = (value: MyType): void => {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
  else {
    console.log(value.toFixed(2));
  }
}

exampleFunction("hello");
exampleFunction(54);


//2.) Instance-of :
//type guards allows you to check whether an object is instance of particular class or constructor function.

class Dog{
  bark(): void {
    console.log("Bark");
  }
}

class Cat{
  meow(): void{
    console.log("meow");
  }
}

function AnimalSounds(animal: Dog | Cat): void{
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();

AnimalSounds(myDog);
AnimalSounds(myCat);