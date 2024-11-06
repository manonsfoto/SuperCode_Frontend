import {
  differenceInYears,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from "date-fns";
// !====================================
// !========= Date-TS-Level-1_1 ========
// !====================================

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const displayDate = document.querySelector(
  "#displayDate"
) as HTMLParagraphElement;

displayDate.innerHTML = `
${date1} = new Date("September 2, 2019 09:00:00")<br>
${date2} = new Date(0)<br>
${date3} = new Date(31556908800)<br>
${date4} = new Date(86400000)`;

// !====================================
// !========= Date-TS-Level-2_1 ========
// !====================================
const display2 = document.querySelector("#display2") as HTMLParagraphElement;
const currentDate = new Date();
const localHour = currentDate.getHours().toString().padStart(2, "0");
const localUTCHour = currentDate.getUTCHours().toString().padStart(2, "0");
const localMinute = currentDate.getMinutes().toString().padStart(2, "0");
const localUTCMinute = currentDate.getUTCMinutes().toString().padStart(2, "0");
display2.innerHTML = `
${currentDate.toLocaleDateString("es-CL")}<br>
${currentDate.toLocaleDateString("en-GB")} <br>
Local Time ${localHour}:${localMinute} Uhr <br>
UTC Time${localUTCHour}:${localUTCMinute} Uhr`;

// !====================================
// !========= Date-TS-Level-3_2 ========
// !====================================

const past = new Date(0);
const present = new Date();
console.log(past);
console.log(present);

console.log(differenceInYears(present, past));
console.log(differenceInHours(present, past));
console.log(differenceInMinutes(present, past));
console.log(differenceInSeconds(present, past));

const myBirthday = new Date("1990-12-19T11:30:00");
console.log(myBirthday);
const currentAge = differenceInYears(present, myBirthday);
console.log("current age: ", currentAge);
const past1 = new Date("04-07-2007");
console.log(
  "mein Alter am 07.04.2007 :",
  differenceInYears(currentDate, past1)
);
console.log("===================================");
console.log(format(myBirthday, "dd.MM.yyyy hh:mm:ss"));
console.log(format(myBirthday, "dd.MM.yyyy hh:mm"));
console.log(format(myBirthday, "dd.MM.yy"));
console.log(format(myBirthday, "dd. MMMM yyyy"));
console.log(format(myBirthday, "hh:mm"));
console.log(format(myBirthday, "eeee"));
console.log(format(myBirthday, "MMMM"));
console.log(format(myBirthday, "dd 'des' MMMM 'im Jahre der Dame' yyyy"));
