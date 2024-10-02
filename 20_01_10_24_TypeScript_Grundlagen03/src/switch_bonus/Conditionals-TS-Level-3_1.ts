const salesMonth: number = Math.ceil(Math.random() * 12);

console.log("Sales Month: " + salesMonth);
let quartal: string = " ";
switch (salesMonth) {
  case 1:
  case 2:
  case 3:
    quartal = "1. Quartal";
    break;
  case 4:
  case 5:
  case 6:
    quartal = "2. Quartal";
    break;
  case 7:
  case 8:
  case 9:
    quartal = "3. Quartal";
    break;
  case 10:
  case 11:
  case 12:
    quartal = "4. Quartal";
    break;
}

const totalSales: number = Math.ceil(Math.random() * 9000 + 1000);

console.log("Total Sales: " + totalSales);
let umsatz: string = "";

switch (true) {
  case 1000 <= totalSales && totalSales <= 2500:
    umsatz = "schlecht";
    break;
  case 2501 <= totalSales && totalSales <= 5000:
    umsatz = "mittelmäßig";
    break;
  case 5001 <= totalSales && totalSales <= 7500:
    umsatz = "hoch";
    break;
  case 7501 <= totalSales && totalSales <= 10000:
    umsatz = "unglaublich";
    break;
}

console.log(`Im ${quartal} war der Umsatz ${umsatz}!`);
