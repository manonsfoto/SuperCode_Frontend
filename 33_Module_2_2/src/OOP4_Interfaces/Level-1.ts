import Circle from "./classes/Circle";
import Rectangle from "./classes/Rectangle";
// !===============================================
// !======== OOP-Interfaces-TS-Level-1_1 ==========
// !===============================================

const circle_1 = new Circle("circle", "red", 30);
const circle_2 = new Circle("circle", "blue", 60);
const circle_3 = new Circle("circle", "yello", 80);
console.log(circle_2);
console.log(circle_3);

circle_1.draw();
// !===============================================
// !======== OOP-Interfaces-TS-Level-1_2 ==========
// !===============================================

const rectangle_1 = new Rectangle("rectangle", "red", 12, 34);
const rectangle_2 = new Rectangle("rectangle", "red", 12, 34);
rectangle_1.draw();
console.log(rectangle_1);
console.log(rectangle_2);
