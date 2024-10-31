import Manager from "./classes/Manager";
import Subordinate from "./classes/Subordinate";
import Trainee from "./classes/Trainee";

// !===============================================
// !======== OOP-Interfaces-TS-Level-2_1 ==========
// !===============================================

const subordinate_1 = new Subordinate(
  "Rosie",
  25,
  "Intern",
  new Date(2023, 10)
);
const subordinate_2 = new Subordinate(
  "Felix",
  28,
  "Product Designer",
  new Date(2020, 3)
);
const subordinate_3 = new Subordinate(
  "Jennie",
  33,
  "Frontend Developer",
  new Date(2018, 8)
);

const manager_1 = new Manager("Minyeong", 33, "Manager", new Date(2011, 12));

manager_1.addSubordinate(subordinate_1);
manager_1.addSubordinate(subordinate_2);
manager_1.addSubordinate(subordinate_3);

console.log(manager_1);

// !===============================================
// !======== OOP-Interfaces-TS-Level-2_2 ==========
// !===============================================

const trainee_1 = new Trainee("Philip", 20, new Date(2024, 3));
const trainee_2 = new Trainee("Karina", 21, new Date(2024, 7));
console.log(trainee_1, trainee_2);

manager_1.addSubordinate(trainee_1);
manager_1.addSubordinate(trainee_2);

subordinate_1.getYearsOfService();
subordinate_2.getYearsOfService();
subordinate_3.getYearsOfService();
manager_1.getYearsOfService();
trainee_1.getYearsOfService();
trainee_2.getYearsOfService();
