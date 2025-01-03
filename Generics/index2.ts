// Examples :

//Array : 
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[]{
  return array.filter((item) => condition(item));
}

const NumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = filterArray<number>(NumArray, (num) => num % 2 === 0);
console.log(evenNumbers);

//Interface  :
interface Fruit{
  name: string;
  color: string;
}

const FruitArray: Fruit[] = [
  { name: 'Apple', color: 'Red' },
  { name: 'Banana', color: 'Yellow' },
  { name: 'Cherry', color: 'Red' },
]

const redfruits = filterArray<Fruit>(FruitArray, (fruit) => fruit.color === 'Red');
console.log(redfruits);
