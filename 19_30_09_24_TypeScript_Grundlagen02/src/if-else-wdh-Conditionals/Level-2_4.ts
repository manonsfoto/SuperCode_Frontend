function vergleich(num1: number, num2: number) {
  if (num1 === num2) {
    console.log("Was für ein Zufall");
  } else if (num1 > num2) {
    console.log("Erste Zahl größer");
  } else if (num1 < num2) {
    console.log("Zweite Zahl größer");
  }
}
vergleich(22, 34);
vergleich(55, 34);
vergleich(22, 22);
