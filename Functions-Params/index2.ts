//Default Params :
//It specifies the value by default to the params of the function

//A)

//A1.) Regular Function Parameter Annotations

function great(person: string = "Annonymous") {
  console.log(`Hello , ${person}!`);
}

great();
great("Nevin");

//A2.) ArrowFunctions Parameter Annotations

const greet = (person: string = "Annonymous") => {
  console.log(person);
}

greet();
greet("Nevin");

//b.)Return Type Annotations
//B1.) Return Annotations : (Regular):
function doubleBy2(x: number): number{
  return x * 2;
}

const result = doubleBy2(2);
console.log(result);

//B2.) Void Return Type Annotations : (Regular)

function double2(x: number): void {
  console.log(`The value is: ${x * x} `);
}

double2(4);

