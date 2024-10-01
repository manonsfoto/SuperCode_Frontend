let weekdayAsNumber: number;
let weekdayAsString: string;

weekdayAsNumber = Number(window.prompt("Please insert a number from 1 to 7"));

switch (weekdayAsNumber) {
  case 1:
    weekdayAsString = "Montag";
    console.log(weekdayAsString);
    break;
  case 2:
    weekdayAsString = "Dienstag";
    console.log(weekdayAsString);
    break;
  case 3:
    weekdayAsString = "Mittwoch";
    console.log(weekdayAsString);
    break;
  case 4:
    weekdayAsString = "Donnerstag";
    console.log(weekdayAsString);
    break;
  case 5:
    weekdayAsString = "Freitag";
    console.log(weekdayAsString);
    break;
  case 6:
    weekdayAsString = "Samstag";
    console.log(weekdayAsString);
    break;
  case 7:
    weekdayAsString = "Sonntag";
    console.log(weekdayAsString);
    break;
  default:
    console.log("Weekday must be between 1 and 7");
}
