//Class Annotations :

//You can annotate class properties with a type. This allows you to define the data type of property and ensure that it is always consistent.

class Person1 {
  name1: string;
  age1: number;

  constructor(name1: string, age1: number) {
    this.name1 = name1;
    this.age1 = age1;
  }
}

const person1 = new Person1("Nevin", 20);
console.log(person1);