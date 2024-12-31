//Default Params :
//It specifies the value by default to the params of the function

//1.) Regular Function Parameter Annotations

function great(person: string = "Annonymous") {
  console.log(`Hello , ${person}!`);
}

great();
great("Nevin");

//2.) ArrowFunctions Parameter Annotations

const greet = (person: string = "Annonymous") => {
  console.log(person);
}

greet();
greet("Nevin");