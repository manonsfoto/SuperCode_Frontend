// !=====================================================
// !=== Functions-TS-Grundlagen-Level-1_1 ===============
// !=====================================================

function intro1(): void {
  console.log("Hello Function");
}

const introMitArrowFN = (): void => {
  console.log("Hello Arrow Function");
};

intro1();
introMitArrowFN();

// !=====================================================
// !=== This-TS-Level-1_2 ===============================
// !=====================================================

let person = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: 1.78,
  zeigeProfil: function () {
    return `Name: ${this.vorname} ${this.nachname}
    Alter: ${this.alter} Jahre
    Körpergröße: ${this.groesse} m
    Familienstand: ${this.familienstand}, `;
  },
};
const outputPerson = document.querySelector("#person") as HTMLElement;
outputPerson.textContent = person.zeigeProfil();

let person2 = {
  vorname: "Minyeong",
  nachname: "Jeong",
  alter: 33,
  familienstand: "verheiratet",
  groesse: 1.65,
  zeigeProfil: () => {
    return `Name: ${person2.vorname} ${person2.nachname}
      Alter: ${person2.alter} Jahre
      Körpergröße: ${person2.groesse} m
      Familienstand: ${person2.familienstand}, `;
  },
};

outputPerson.textContent = person2.zeigeProfil();

// !=====================================================
// !=== Functions-TS-Grundlagen-Level-1_2 ===============
// !=====================================================

const output = document.querySelector("#output") as HTMLElement;

// ?=====================================================

function hallo() {
  output.textContent = "Hallo";
}
hallo();

const hallo2 = () => {
  output.textContent = "Hallo";
};
hallo2();

// ?=====================================================

function summeZwei(num1: number, num2: number) {
  console.log(num1 + num2);
}
summeZwei(3, 5);

const summeZwei2 = (num1: number, num2: number) => {
  console.log(num1 + num2);
};
summeZwei2(3, 5);
// ?=====================================================

// function multiple(num1: number, num2: number) {
//   window.alert(num1 * num2);
// }
// multiple(2, 4);

// const multiple2 = (num1: number, num2: number) => {
//   window.alert(num1 * num2);
// };
// multiple2(2, 4);
// ?=====================================================

const personInfo = {
  vorname: "Minyeong",
  nachname: "Jeong",
  alter: 33,
  familienstand: "verheiratet",
  groesse: 1.65,
};

function logObject(obj: {}) {
  console.log(Object.keys(obj));
}

logObject(personInfo);

const logObject2 = (obj: {}) => {
  console.log(Object.keys(obj));
};
logObject2(personInfo);

// ?=====================================================

// !=====================================================
// !=== Functions-TS-Level-1_6 ==========================
// !=====================================================
console.log("-------------------------");

type TMonster = {
  name: string;
  type: string;
  health: number;
  strength: number;
  speed: number;
};

const createMonster = (
  nameParam: string,
  typeParam: string,
  healthParam?: number,
  strengthParam?: number,
  speedParam?: number
): void => {
  let newMonster: TMonster = {
    name: nameParam,
    type: typeParam,
    health: healthParam ?? 100,
    strength: strengthParam ?? 50,
    speed: speedParam ?? 25,
  };
  return console.log(newMonster);
};

createMonster("Minyeong", "human");
createMonster("Philip", "human", 80);
createMonster("Pikachu", "pokemon", 40, 33);
createMonster("Laichu", "pokemon", 60, 40, 70);

// !=====================================================
// !=== Functions-TS-Level-2_2 ==========================
// !=====================================================
console.log("-------------------------");

const inputFirstName = document.querySelector(
  "#inputFirstName"
) as HTMLInputElement;
const inputLastName = document.querySelector(
  "#inputLastName"
) as HTMLInputElement;
const inputEmail = document.querySelector("#inputEmail") as HTMLInputElement;
const inputPhone = document.querySelector("#inputPhone") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;

type NewCustomer = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
};

function greetNewUser1(customer: NewCustomer) {
  if (customer.email && customer.phone) {
    return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.email} and ${customer.phone}`;
  } else if (customer.email) {
    return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.email}`;
  } else if (customer.phone) {
    return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.phone}`;
  } else {
    return `Hello ${customer.firstName} ${customer.lastName}. We will not contact you`;
  }
}

function greetNewUser2(
  firstName: string,
  lastName: string,
  email?: string,
  phone?: string
): string {
  if (email && phone) {
    return `Hello ${firstName} ${lastName}. We will contact you via ${email} and ${phone}`;
  } else if (email) {
    return `Hello ${firstName} ${lastName}. We will contact you via ${email}`;
  } else if (phone) {
    return `Hello ${firstName} ${lastName}. We will contact you via ${phone}`;
  } else {
    return `Hello ${firstName} ${lastName}. We will not contact you`;
  }
}

button.addEventListener("click", () => {
  const firstNameValue = inputFirstName.value;
  const lastNameValue = inputLastName.value;
  const emailValue = inputEmail.value;
  const phoneValue = inputPhone.value;
  const greetText = document.querySelector("#greetText") as HTMLElement;
  const newCustomer = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    phone: phoneValue,
  };
  if (firstNameValue && lastNameValue) {
    console.log(greetNewUser1(newCustomer));
    greetText.textContent = greetNewUser2(
      firstNameValue,
      lastNameValue,
      emailValue,
      phoneValue
    );
  }
});
