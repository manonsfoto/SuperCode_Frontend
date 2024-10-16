import { Weekday } from "./enums_level1";
import { Month } from "./enums_level1";

console.log(Weekday);

console.log(Month);

for (let day in Weekday) {
  console.log(Weekday[day as keyof typeof Weekday]);
}

for (let month in Month) {
  console.log(Month[month as keyof typeof Month]);
}
