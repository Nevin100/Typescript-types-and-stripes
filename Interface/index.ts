// Interface

// It is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have.

interface Computer{
  name: string;
  ram: number;
  hdd: number;
}

const ComputerExample: Computer = {
  name: "i7",
  ram: 8,
  hdd: 100,
}

console.log(ComputerExample.name);
console.log(ComputerExample.ram);
console.log(ComputerExample.hdd);

//interface of Function :

interface Add{
  (x: number, y: number): number;
}

const add: Add = (x: number, y: number) => x + y;
console.log(add(2, 2));

//interafce of class : 
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface Movie extends MovieDetails{
  genra: string;
}
const movie1: Movie = {
  name: "Movie1",
  genra: "Action",
  ratings: 5,
  printMovieInfo(name: string, price: number, ratings: number): string | number { 
    return `Movie name: ${name} Price:${price} Ratings: ${ratings}`;
  }
}

console.log()