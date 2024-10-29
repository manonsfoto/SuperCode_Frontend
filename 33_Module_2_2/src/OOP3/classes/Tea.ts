import Beverage from "./Beverage";

export enum Flavor {
  Green,
  Black,
  Chai,
  Peppermint,
}
class Tea extends Beverage {
  _flavor: Flavor;
  constructor(name: string, price: number, flavor: Flavor) {
    super(name, price);
    this._flavor = flavor;
  }
}
export default Tea;
