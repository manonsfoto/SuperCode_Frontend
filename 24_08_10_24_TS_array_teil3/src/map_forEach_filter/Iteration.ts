// !==================================================
// !===== Array-TS-Iteration-Level-1_1 (forEach) =====
// !==================================================

let getraenke: string[] = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

console.log(getraenke);

const myDrinks = () => {
  if (getraenke) {
    const getraenkeSort = getraenke.sort();
    getraenkeSort.forEach((elt) => console.log(elt));

    const myDrinksList = document.querySelector("#myDrinksList") as HTMLElement;
    getraenkeSort.forEach((elt) => {
      if (myDrinksList) {
        myDrinksList.innerHTML += `<li>${elt}</li>`;
      }
    });
  }
};

myDrinks();

// !==============================================
// !===== Array-TS-Iteration-Level-1_2 (map) =====
// !==============================================
console.log("===============================");

const drinks: string[] = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const upperDrinks: string[] = drinks.map((elt) => elt.toUpperCase());
console.log(upperDrinks);

const iLikeDrinks: string[] = drinks.map((elt) => `I like ${elt}`);

console.log(iLikeDrinks);

// !========================================
// !===== Array-TS-Iteration-Level-1_3 =====
// !========================================
console.log("===============================");

let array: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const arrayMultiple: number[] = array.map((elt) => elt * 2);
console.log(arrayMultiple);

const arrayMultipleSort: number[] = arrayMultiple.sort(
  (a: number, b: number) => a - b
);
console.log(arrayMultipleSort);

// !==============================================
// !===== Array-TS-Iteration-Level-1_4 (map) =====
// !==============================================
console.log("===============================");

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const fahrenheitConvert: number[] = fahrenheit.map((elt) =>
  Math.round((elt - 32) / 1.8)
);
console.log(fahrenheitConvert);

// !==============================================
// !===== Array-TS-Iteration-Level-1_5 (map) =====
// !==============================================
console.log("===============================");

let checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const checkNumberMap: number[] = checkNumber.map((num: number) => {
  if (num % 3 === 0) {
    return num + 100;
  } else {
    return num;
  }
});

console.log(checkNumberMap);

// !===========================================================
// !===== Array-TS-Iteration-Level-1_6 (map oder forEach) =====
// !===========================================================
console.log("===============================");

let album: string[] = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const albumEdit: string[] = album.map((elt) => {
  if (elt.slice(-4, -3) === ".") {
    return elt.split(".")[0].toLowerCase();
  } else {
    return "invalid";
  }
});

console.log(albumEdit);

// !==============================================
// !===== Array-TS-Iteration-Level-1_7 (map) =====
// !==============================================
console.log("===============================");

let fruits: string[] = ["🍇", "🍌", "🍒", "🍎"];
const fruitsSaft: string[] = fruits.map((elt) => elt + "🥤");
console.log(fruitsSaft);

// !=================================================
// !===== Array-TS-Iteration-Level-1_8 (filter) =====
// !=================================================
console.log("===============================");

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printEvenNumbers = () => {
  const evenNumbers: number[] = zahlen.filter((num: number) => num % 2 === 0);
  return console.log(evenNumbers);
};
printEvenNumbers();

const printOddNumbers = () => {
  const oddNumbers: number[] = zahlen.filter((num: number) => num % 2 !== 0);
  return console.log(oddNumbers);
};
printOddNumbers();
