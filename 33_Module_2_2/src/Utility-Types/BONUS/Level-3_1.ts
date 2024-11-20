interface ISmoothie {
  name: string;
  ingredients: string[];
  size: Size;
  price: number;
}
enum Size {
  small,
  medium,
  large,
}

// function customizeSmoothie(
//   basicSmoothie: ISmoothie,
//   customizedSmoothie: Partial<ISmoothie>
// ): ISmoothie {
//   const newSmoothie: ISmoothie = {
//     name: customizedSmoothie.name
//       ? customizedSmoothie.name
//       : basicSmoothie.name,
//     ingredients: customizedSmoothie.ingredients
//       ? customizedSmoothie.ingredients
//       : basicSmoothie.ingredients,
//     size: customizedSmoothie.size
//       ? customizedSmoothie.size
//       : basicSmoothie.size,
//     price: customizedSmoothie.price
//       ? customizedSmoothie.price
//       : basicSmoothie.price,
//   };

//   return newSmoothie;
// }
function customizeSmoothie(
  basicSmoothie: ISmoothie,
  customizedSmoothie: Partial<ISmoothie>
): ISmoothie {
  return { ...basicSmoothie, ...customizedSmoothie };
}

const basic: ISmoothie = {
  name: "green Smoothie",
  ingredients: ["kale", "carrot", "apple"],
  size: Size.medium,
  price: 7.99,
};
const customized: Partial<ISmoothie> = {
  name: "healthy Smoothie",
  price: 4.99,
};

console.log(customizeSmoothie(basic, customized));
