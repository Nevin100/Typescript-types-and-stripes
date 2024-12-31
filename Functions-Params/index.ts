// Function-Params-Annotations :
//Functon Parameter Annotations in TS are used to specify the expected types of the parameters that a function takes

//1.) Regular Function Parameter Annotations

function AddOne(num: number) {
  num += 1;
  console.log(num);
};

//2.) ArrowFunctions Parameter Annotations

const Product = (x: number, y: number) => {
  let result = x * y;
  console.log(result);
} 
  

AddOne(4);
Product(5, 6);

