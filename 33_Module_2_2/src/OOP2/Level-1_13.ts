import Car2 from "./classes/Car2";
import { CarType } from "./classes/Car2";
import Driver from "./classes/Driver2";

const volvo = new Car2("volvo", 2003, 60, CarType.SUV);

console.log(volvo.constructionYear);
console.log(volvo.getSpeedInfo());

const driver1 = new Driver("Minyeong", "Jeong", 33, volvo, 2024);

driver1.getCarType();
