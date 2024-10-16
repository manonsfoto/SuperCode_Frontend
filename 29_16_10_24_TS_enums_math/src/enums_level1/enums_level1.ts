// !==================================
// !=========Enum-TS-Level-1_1========
// !==================================

export enum Weekday {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export enum Month {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

// !==================================
// !=========Enum-TS-Level-1_2========
// !==================================

enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Familie = "Familie",
}

enum PizzaIngredients {
  Cheese = "Cheese",
  Onion = "Onion",
  Salami = "Salami",
  Pepperoni = "Pepperoni",
  Mushrooms = "Mushrooms",
  Pineapple = "Pineapple",
  Olives = "Olives",
  Bacon = "Bacon",
}

type Pizza = { size: PizzaSize; ingredients: PizzaIngredients[] };

const pizza1: Pizza = {
  size: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Onion],
};

const pizza2: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [PizzaIngredients.Salami, PizzaIngredients.Pepperoni],
};

const pizza3: Pizza = {
  size: PizzaSize.Large,
  ingredients: [
    PizzaIngredients.Mushrooms,
    PizzaIngredients.Olives,
    PizzaIngredients.Bacon,
  ],
};

const pizza4: Pizza = {
  size: PizzaSize.Familie,
  ingredients: [
    PizzaIngredients.Pineapple,
    PizzaIngredients.Cheese,
    PizzaIngredients.Bacon,
  ],
};

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
