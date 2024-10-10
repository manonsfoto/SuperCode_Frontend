const createImageNames = (wieViele: number) => {
  let returnArray: string[] = [];
  for (let i: number = 1; i <= wieViele; i++) {
    let numInTitle = i.toString();

    returnArray.push(`image_${numInTitle.padStart(3, "0")}.jpg`);
  }
  console.log(returnArray);
};
createImageNames(3);
createImageNames(100);

// ☆*: .｡. o(≧▽≦)o .｡.:*☆
