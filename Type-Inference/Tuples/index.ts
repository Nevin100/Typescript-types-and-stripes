//Tuples :
//It is a type that represents an array with a fixed number of elements, where each element cn have a different type.

let myTuple: [string, number] = ["Hello", 42];
console.log(myTuple[0]);
console.log(myTuple[1]);

//Destructuring of a Tuple :
//It is a way to unpack the elements of a tuple into separate variables.

let [first, second] = myTuple;
console.log(first);
console.log(second);