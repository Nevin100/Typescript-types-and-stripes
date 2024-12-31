// AnyType:

//It can be used to represent any type of value , and after annotating a variable with this, all the type checking gets disabled

//Warning :
// Can lead to untyped code error so use it wisely or try to prefer Annotating the variable before as well as this should be used sparingly, dont use it in production code.

let color: any = "Nevin";
color = true;
color = 25;

console.log(color); 
