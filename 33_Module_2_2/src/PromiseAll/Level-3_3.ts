const ordersDiv = document.getElementById("orders") as HTMLDivElement;
let orderCompleteCounter: number = 0;
document.getElementById("startSimulation")?.addEventListener("click", () => {
  ordersDiv.innerHTML = "";

  createCustomerOrder(1, "Cola");
  createCustomerOrder(2, "Sprite");
  createCustomerOrder(3, "Wasser");
});

function order(
  customerNumber: number,
  customerDiv: HTMLDivElement
): Promise<void> {
  customerDiv.textContent = `${customerNumber}. Person in der Reihe`;
  return new Promise((resolve) => {
    customerDiv.innerHTML += `<br> 📝 Bestellung aufnehmen`;
    setTimeout(resolve, getRandomDurationInMilliseconds());
  });
}

function pay(customerDiv: HTMLDivElement): Promise<void> {
  return new Promise((resolve) => {
    customerDiv.innerHTML += `<br> 💳Bezahlung durchführen`;
    resolve();
  });
}
function makeBurger(customerDiv: HTMLDivElement): Promise<void> {
  return new Promise((resolve) => {
    customerDiv.innerHTML += `<br> 🍔Bereite einen Burger vor`;

    setTimeout(() => {
      customerDiv.innerHTML += `<br> 🍔Burger fertig`;
      resolve();
    }, getRandomDurationInMilliseconds());
  });
}
function makeFries(customerDiv: HTMLDivElement): Promise<void> {
  return new Promise((resolve) => {
    customerDiv.innerHTML += `<br> 🍟Bereite Pommes vor`;

    setTimeout(() => {
      customerDiv.innerHTML += `<br> 🍟Pommes fertig`;
      resolve();
    }, getRandomDurationInMilliseconds());
  });
}
function makeDrink(drink: string, customerDiv: HTMLDivElement): Promise<void> {
  return new Promise((resolve) => {
    customerDiv.innerHTML += `<br> 🥤Fülle ${drink} ein`;

    setTimeout(() => {
      customerDiv.innerHTML += `<br> 🥤${drink} fertig`;
      resolve();
    }, getRandomDurationInMilliseconds());
  });
}

function processOrder(
  customerNumber: number,
  drink: string,
  customerDiv: HTMLDivElement
) {
  Promise.all([
    order(customerNumber, customerDiv),
    pay(customerDiv),
    makeBurger(customerDiv),
    makeFries(customerDiv),
    makeDrink(drink, customerDiv),
  ]).then(() => {
    customerDiv.innerHTML += `<br>✅ Bestellung abgeschlossen`;
    orderCompleteCounter--;
    if (orderCompleteCounter === 0) {
      ordersDiv.innerHTML += `🎉Alle Bestellungen abgeschlossen!`;
    }
  });
}

function createCustomerOrder(customerNumber: number, drink: string) {
  const singleOrderDiv = document.createElement("div");
  singleOrderDiv.setAttribute("class", "singleOrderDiv");
  ordersDiv.appendChild(singleOrderDiv);

  processOrder(customerNumber, drink, singleOrderDiv);
  orderCompleteCounter++;
}

function getRandomDurationInMilliseconds(): number {
  const min = 2000;
  const max = 12000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
