//Access Specifiers :

//In typescript , you can access modifiers to control the visibility of class members (properties and methods).
//There are three types of access specifiers in typescript : public, private, protected.

//Public : Members marked as public an be accessed from anywhere, both inside and outside class

//Protected : Members marked as protected can be accessed within the class and by the class's derived classes.

//Private : Members marked as private can only be accessed within the class.

class Person2 {
  private first2: string;
  public last2: string;

  constructor(first2: string, last2: string) {
    this.first2 = first2;
    this.last2 = last2;
  }

  getName(): string {
    return `${this.first2} ${this.last2}`;
  }



}

let p1 = new Person2("John", "Doe");
console.log(p1.last2);
console.log(p1.getName())