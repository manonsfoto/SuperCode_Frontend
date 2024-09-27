let x: number = 20;
let y: number = 30;

console.log(x + y);
console.log(y - x);
console.log(x - y);
console.log(x * y);
console.log(x / y);

let z: number = 10;
let resultOne: number = (x * y) / z;
console.log(resultOne);

let a: number = 15;
let b: number = 9;

console.log(a % b);

let c: number = 20;
let resultTwo: number = (a + b) * c;
console.log(resultTwo);

console.log(++a);
console.log(--b);
let resultThree: number = b - a;
console.log(resultThree);

console.log(resultOne % resultTwo);
