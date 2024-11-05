import IStudent from "./interface/IStudent";

// !====================================
// !===== OOP-TypeCast-Level-1_1 =======
// !====================================

const processStudent = (student: IStudent) => {
  console.log(`Processing ${student._name} …`);
};

const student1 = { _name: "Kirby", _age: 10 };
const student1AsIStudent = student1 as IStudent;
processStudent(student1AsIStudent);

// const student2 = {
//   age: 22,
// };
// const student2AsIStudent = student2 as IStudent;
// processStudent(student2AsIStudent); //NOTE - Processing undefined ...

// !====================================
// !======= UnionType-Level-1_1 ========
// !====================================
console.log("===================================");

type TResult = "success" | "error" | "pending";

const result1: TResult = "success";
const handleResult = (result: TResult): void => {
  switch (result) {
    case "success":
      console.log("Congrats! You've got a successful result!");
      break;
    case "error":
      console.log("Oops You've got an error.");
      break;
    case "pending":
      console.log("Still pending...");
      break;
    default:
      console.log("Unknown status");
  }
};
handleResult(result1);
handleResult("pending");
handleResult("error");
// handleResult("haha");

// !====================================
// !==== ErrorHandling-TS-Level-1_1 ====
// !====================================
console.log("===================================");

// const greetUser = (): void => {
//   try {
//     const userID = window.prompt("What is your User ID?");
//     if (!userID) {
//       throw new Error("kein Name wurde eingegeben.");
//     }
//     console.log(`Welcome back! Our lovely ${userID}`);
//   } catch (err) {
//     console.log("Welcome back!🎉");
//   }
// };

// greetUser();

// !====================================
// !==== ErrorHandling-TS-Level-2_1 ====
// !====================================
console.log("===================================");

let randomNum: number = 0;
let lottoResults: number[] = [];

const generateLottoNumber = (): number => {
  randomNum = Math.ceil(Math.random() * 99);

  if (randomNum > 49) {
    throw new Error(`die Zahl ${randomNum} ist größer als 49!!!`);
  }
  return randomNum;
};

for (let counter = 0; lottoResults.length < 7; counter++) {
  try {
    generateLottoNumber();
    if (!lottoResults.includes(randomNum)) {
      lottoResults.push(randomNum);
    }
  } catch (err) {
    console.log("die Zahl ist größer als 49!!!");
  }
}
console.log(lottoResults);

// !====================================
// !==== IntersectionType-Level-1_1 ====
// !====================================
console.log("===================================");

type TAlcohol = {
  name: string;
  percentage: number;
  type: string;
};

type TMixer = {
  name: string;
  type: string;
  IsCarbonated: boolean;
};

type TCocktail = TAlcohol & TMixer;

const cocktailMidori: TCocktail = {
  name: "Midori Sour",
  percentage: 10,
  type: "melon liqueur",
  IsCarbonated: true,
};

console.log(cocktailMidori);

// !============================================
// !==== IntersectionType-Level-1_2 (Bonus) ====
// !============================================
console.log("===================================");

const mixCocktail = (alcohol: TAlcohol, mixer: TMixer): TCocktail => {
  const cocktail: TCocktail = {
    name: `${alcohol.name} ${mixer.name}`,
    percentage: alcohol.percentage,
    type: alcohol.type,
    IsCarbonated: mixer.IsCarbonated,
  };
  console.log(cocktail);

  return cocktail;
};

const alcoholGin: TAlcohol = {
  name: "Gin",
  percentage: 40,
  type: "neutral spirit",
};

const mixerTonic: TMixer = {
  name: "Tonic",
  type: "soft drink",
  IsCarbonated: true,
};

const alcoholSoju: TAlcohol = {
  name: "Soju",
  percentage: 16,
  type: "clear, neutral spirit",
};

const mixerCola: TMixer = {
  name: "Cola",
  type: "soft drink",
  IsCarbonated: true,
};

mixCocktail(alcoholGin, mixerTonic);
mixCocktail(alcoholSoju, mixerCola);
