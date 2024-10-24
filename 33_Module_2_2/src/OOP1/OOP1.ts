import IceCreamFlavor from "./classes/IceCreamFlavor";
import SchoolClass from "./classes/SchoolClass";
import Person from "./classes/Person";
import Car from "./classes/Car";
import Driver from "./classes/Driver";

// !=====================================================
// !=== OOP-Class-TS-Level-1_1 ==========================
// !=====================================================

const icecream_1 = new IceCreamFlavor("Matcha", 5, true, "green");
const icecream_2 = new IceCreamFlavor("Chocolate", 3, true);
const icecream_3 = new IceCreamFlavor("Yuzu", 4, false, "ähnlich wie Zitrone");
const icecream_4 = new IceCreamFlavor("Blueberry", 3, false, "Milchfrei");

const icecreamArr: IceCreamFlavor[] = [
  icecream_1,
  icecream_2,
  icecream_3,
  icecream_4,
];

const popularIcecream = icecreamArr.filter(
  (icecream) => icecream._isPopular === true
);
popularIcecream.forEach((elt) => console.log(elt._name));

// !=====================================================
// !=== OOP-Class-TS-Level-1_2 ==========================
// !=====================================================

const class_1 = new SchoolClass("FE0324", "Frontendentwicklung", []);
const class_2 = new SchoolClass("UX0724", "UX Design", []);
const class_3 = new SchoolClass("BE0524", "Backendentwicklung,", []);

class_1._name = "Webentwicklung";
class_2._name = "UXUI Design";

console.log(class_1);
console.log(class_2);
console.log(class_3);

// !=====================================================
// !=== OOP-Class-TS-Level-2_1 ==========================
// !=====================================================
console.log("---------------------------------------");

const person_1 = new Person("A1", "Minyeong", "Jeong", 901219);
const person_2 = new Person("A2", "Philip", "Heinrich", 890914);
const person_3 = new Person("B1", "Mary", "Jane", 910122);
const person_4 = new Person("B2", "Libby", "Kim", 941224);

const personArr: Person[] = [person_1, person_2, person_3, person_4];

personArr.forEach((person) => {
  class_1.addPerson(person);
});
console.log(class_1._personen);

// !=====================================================
// !=== OOP-Class-TS-Level-2_2 ==========================
// !=====================================================
console.log("---------------------------------------");

const car_1 = new Car("Hyundai", 2020, 200);
const car_2 = new Car("Tesla", 2023, 300);
const car_3 = new Car("Volvo", 2018, 260);

const driver_1 = new Driver("Minyeong", "Jeong", 33, car_1);
const driver_2 = new Driver("Philip", "Heinrich", 35, car_2);
const driver_3 = new Driver("Elke", "Heinrich", 60, car_3);

console.log(driver_1);
console.log(driver_2);
console.log(driver_3);
