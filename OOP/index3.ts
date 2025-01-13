//Getters and Setters :

//Geeters and Setters are used to access and modify the class properties. Getters & Setters are allows you to define a property in class that looks like a simple variable from outside but internally has additional logic for getting and setting of value .
 
class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty
  }

  set myProperty(value: number) {
    this._myProperty = value;
  }
} const myInstance = new MyClass();
console.log(`Current Value  :${myInstance.myProperty}`)
