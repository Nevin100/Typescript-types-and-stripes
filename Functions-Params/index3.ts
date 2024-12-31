//Never Keyword :
//The never Keyword is used to indicate that a function will never return or that a function will not return anything , or that a variable can never have a value.

//Note :  If a function has infinite loop, always throws an error , an infinite loop

function throwError(msg: string): never {
  throw new Error(msg);
}

throwError("Hello");

function infiniteLoop(): never {
  while (true) {
// do nothing
  }
}

infiniteLoop()

let x: never;

function neverReturn() {
  while(true){}
}

neverReturn();