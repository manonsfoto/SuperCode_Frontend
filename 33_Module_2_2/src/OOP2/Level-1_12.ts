import IceCreamFlavor2 from "./classes/IceCreamFlavors2";

const MatchaIce = new IceCreamFlavor2("Matcha", 5, true, "green");
const ChocolateIce = new IceCreamFlavor2("Chocolate", 3, true);
const YuzuIce = new IceCreamFlavor2("Yuzu", 4, false, "ähnlich wie Zitrone");
const BlueberryIce = new IceCreamFlavor2("Blueberry", 3, false, "Milchfrei");

MatchaIce.getTotalPrice(3);
MatchaIce.printInfo();
MatchaIce.getLengthOfDescription();
ChocolateIce.getLengthOfDescription();

const iceArray = [MatchaIce, ChocolateIce, YuzuIce, BlueberryIce];
const iceCreamCards = document.querySelector("#iceCreamCards") as HTMLElement;

iceArray.forEach((ice, index) => {
  const iceCreamDiv = document.createElement("div");
  let scoops: number = 0;

  iceCreamDiv.innerHTML = `
    <p>${ice._isPopular ? "⭐" : ""}</p>
    <h3>${ice._name}</h3>
    <p>Price: ${ice._price} Euro</p>
    <p id="scoops-${index}">Scoops: ${scoops}</p>
    <p id="total-price-${index}">Total Price: ${ice.getTotalPrice(
    scoops
  )} Euro</p>
  `;

  const createBtn = document.createElement("button");
  createBtn.textContent = "+1";
  createBtn.addEventListener("click", () => {
    scoops++;

    const scoopsPTag = document.getElementById(
      `scoops-${index}`
    ) as HTMLElement;
    const totalPriceElement = document.getElementById(
      `total-price-${index}`
    ) as HTMLElement;

    scoopsPTag.textContent = `Scoops: ${scoops}`;
    totalPriceElement.textContent = `Total Price: ${ice.getTotalPrice(
      scoops
    )} Euro`;
  });
  iceCreamCards.appendChild(iceCreamDiv);
  iceCreamDiv.appendChild(createBtn);
});
