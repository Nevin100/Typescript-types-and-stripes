//Declaration Merging :

//It refers to the ability to extend or augment an existing declaration, including interfaces.It is very helpful when you want to add new properties  or methods to an existing interface without modifying the original decalaration.

//Original Merging : 
interface Car{
  brand: string;
  start(): void;
}

//Declaration Merging : 
interface Car{
  model: string;
  stop(): void;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  start: () => console.log("Car started"),
  stop: () => console.log("Car stopped"),
}

console.log(myCar.model);