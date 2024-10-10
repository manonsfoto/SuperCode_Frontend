// !========================================
// !========== Loops-TS-Level-1_1 ==========
// !========================================

for (let num: number = 1; num <= 10; num++) {
  console.log("Hello World " + num);
}

console.log("===============================");
// !========================================
// !========== Loops-TS-Level-1_2 ==========
// !========================================

let numbersToTen: number[] = [];

for (let i: number = 0; i <= 10; i++) {
  numbersToTen.push(i);
}

console.log(numbersToTen);

console.log("===============================");
// !========================================
// !========== Loops-TS-Level-1_4 ==========
// !========================================

let friendNames: string[] = [
  "Georg",
  "Anass",
  "Elaine",
  "Hakan",
  "Eric",
  "Kim",
  "Sergio",
];

for (let i: number = 0; i < friendNames.length; i++) {
  console.log(friendNames[i]);
}

console.log("===============================");

for (const singleName of friendNames) {
  console.log(singleName);
}

console.log("===============================");
// !========================================
// !========== Loops-TS-Level-1_9 ==========
// !========================================

let words: string[] = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];

const inputNewWord = document.querySelector(
  "#inputNewWord"
) as HTMLInputElement;
const inputLength = document.querySelector("#inputLength") as HTMLInputElement;
const btnAdd = document.querySelector("#btnAdd") as HTMLInputElement;
const btnFilter = document.querySelector("#btnFilter") as HTMLInputElement;
const showResult = document.querySelector("#showResult") as HTMLElement;

let updatedWords: string[] = words.map((elt) => elt);

const renderList = (Arr: string[]) => {
  showResult.innerHTML = "";
  Arr?.forEach((word: string) => {
    showResult.innerHTML += `<p>${word}</p>`;
  });
};

btnFilter.addEventListener("click", () => {
  updatedWords = words.filter(
    (word) => word.length === Number(inputLength.value)
  );
  renderList(updatedWords);
});

btnAdd.addEventListener("click", () => {
  words.push(inputNewWord.value);
});

// !=========================================
// !========== Loops-TS-Level-1_10 ==========
// !=========================================

const getHighestNumber = (Arr: number[]) => {
  let highestNumber: number = Arr[0];

  for (let i: number = 1; i < Arr.length; i++) {
    if (Arr[i] > highestNumber) {
      highestNumber = Arr[i];
    }
  }
  return console.log(highestNumber);
};

let numArr1: number[] = [1, 2, 3, 4, 6, 67, 678, 8];
let numArr2: number[] = [435, 67, 35, 4];
let numArr3: number[] = [4353, 76867, 123, 5, 348388];

getHighestNumber(numArr1);
getHighestNumber(numArr2);
getHighestNumber(numArr3);

console.log("===============================");
// !=========================================
// !========== Loops-TS-Level-1_10 ==========
// !=========================================

const calculateSum = (maxNumber: number) => {
  let sum: number = 0;
  for (let i: number = 1; i <= maxNumber; i++) {
    sum += i;
  }
  console.log(sum);
};
calculateSum(100);
calculateSum(55);
calculateSum(5);
