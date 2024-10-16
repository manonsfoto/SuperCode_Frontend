// !==================================
// !=========Math-TS-Level-1_1========
// !==================================
console.log(Math.PI);
const PI: number = Math.PI;

const roundedPI = PI.toFixed(2);
console.log(roundedPI);

// !==================================
// !=========Math-TS-Level-1_2========
// !==================================
console.log("-----------------------");

let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

const roundNumbers = (num: number) => {
  return console.log(Math.round(num));
};

randomNumbers.forEach((elt) => roundNumbers(elt));

// !==================================
// !=========Math-TS-Level-1_3========
// !==================================
console.log("-----------------------");

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 11);
let randomNum1_100 = Math.floor(Math.random() * 101);

console.log(randomNum);
console.log(randomNum1_10);
console.log(randomNum1_100);

// !==================================
// !=========Math-TS-Level-1_4========
// !==================================
console.log("-----------------------");

console.log(
  Math.min(
    393,
    205,
    479,
    47,
    376,
    267,
    385,
    2,
    190,
    383,
    286,
    462,
    115,
    138,
    331,
    409,
    427,
    245,
    224,
    276,
    483,
    55,
    147,
    177,
    208,
    347,
    135,
    282,
    33,
    270,
    475,
    426,
    476,
    453,
    474,
    351,
    219,
    358,
    354,
    410,
    240,
    139,
    371,
    356,
    277,
    202,
    264,
    204,
    447,
    488
  )
);

console.log(
  Math.max(
    393,
    205,
    479,
    47,
    376,
    267,
    385,
    2,
    190,
    383,
    286,
    462,
    115,
    138,
    331,
    409,
    427,
    245,
    224,
    276,
    483,
    55,
    147,
    177,
    208,
    347,
    135,
    282,
    33,
    270,
    475,
    426,
    476,
    453,
    474,
    351,
    219,
    358,
    354,
    410,
    240,
    139,
    371,
    356,
    277,
    202,
    264,
    204,
    447,
    488
  )
);

// !==================================
// !=========Math-TS-Level-2_2========
// !==================================
console.log("-----------------------");

let randomNumber: number = Math.ceil(Math.random() * 10);
const userInput = Number(prompt("Schätzen Sie die Nummer zwischen 1 und 10."));

if (userInput === randomNumber) {
  console.log(`Du hast gewonnen. die Nummer lautet ${randomNumber}!`);
} else {
  console.log(`Du hast verloren. die Nummer lautet ${randomNumber}!`);
}
