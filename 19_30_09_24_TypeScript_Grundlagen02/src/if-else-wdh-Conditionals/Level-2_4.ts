function vergleich() {
  const num1: number = Math.ceil(Math.random() * 77);
  const num2: number = Math.ceil(Math.random() * 77);
  console.log("Num1 :" + num1);
  console.log("Num2 :" + num2);

  if (num1 === num2) {
    console.log("Was für ein Zufall");
  } else if (num1 > num2) {
    console.log("Erste Zahl größer");
  } else if (num1 < num2) {
    console.log("Zweite Zahl größer");
  }
}
vergleich();
vergleich();
vergleich();
