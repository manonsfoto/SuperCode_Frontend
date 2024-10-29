import Beverage from "./classes/Beverage";
import Coffee, { CoffeeType } from "./classes/Coffee";
import Tea, { Flavor } from "./classes/Tea";

const beverage1 = new Beverage("Chocomel", 3);

const coffee1 = new Coffee("Melbourne Coffee", 5, CoffeeType.Latte);

const tea1 = new Tea("Jeju green tea", 4, Flavor.Green);

console.log(beverage1);
console.log(coffee1);
console.log(tea1);
