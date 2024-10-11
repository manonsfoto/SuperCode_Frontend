const bewertung = (Arrparam: number[]) => {
  let average: number = 0;
  let sum: number = 0;
  for (const singleNum of Arrparam) {
    sum += singleNum;
    average = sum / Arrparam.length;
  }
  console.log(`Der Punktedurchschnitt : ${average}`);
  switch (true) {
    case average < 50:
      console.log(`Ungenügend`);
      break;
    case average < 60:
      console.log(`Mangelhaft`);
      break;
    case average < 70:
      console.log(`Ausreichend`);
      break;
    case average < 80:
      console.log(`Befriedigend`);
      break;
    case average < 90:
      console.log(`Gut`);
      break;
    case average <= 100:
      console.log(`Sehr Gut`);
      break;
  }
};

const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];
bewertung(results);
const results1 = [90, 31, 70, 80, 52, 88, 94, 100, 25, 80];
bewertung(results1);
const results2 = [100, 100, 100, 100, 100, 100, 94, 100, 100, 100];
bewertung(results2);
const results3 = [44, 17, 70, 80, 52, 87, 94, 97, 25, 46];
bewertung(results3);
const results4 = [44, 17, 0, 0, 52, 87, 0, 0, 25, 46];
bewertung(results4);
