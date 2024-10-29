import Beverage from "./Beverage";

export enum CoffeeType {
  Espresso,
  Latte,
  Cappuccino,
  Americano,
}

class Coffee extends Beverage {
  _coffeeType: CoffeeType;

  constructor(name: string, price: number, coffeeType: CoffeeType) {
    super(name, price);
    this._coffeeType = coffeeType;
  }
}

export default Coffee;
