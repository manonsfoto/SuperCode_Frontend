const promiseNumber: Promise<number[]> = new Promise((resolve, reject) => {
  const NumArray: number[] = [];

  while (NumArray.length < 3) {
    const randomNum = Math.floor(Math.random() * 130) + 1;
    NumArray.push(randomNum);
  }

  NumArray.forEach((num: number) => {
    if (num > 100) {
      reject("einer der Werte ist größer als 100😭");
    } else {
      resolve(NumArray);
    }
  });
});

promiseNumber
  .then((resp) => {
    console.log("NumArray: ", resp);
    const arrPlusSeven = resp.map((num) => {
      return num + 7;
    });
    console.log("Step 1👉  +7:", arrPlusSeven);
    return arrPlusSeven;
  })
  .then((resp) => {
    const arrMultipleTwo = resp.map((num) => {
      return num * 2;
    });
    console.log("Step 2👉  *2:", arrMultipleTwo);
    return arrMultipleTwo;
  })
  .then((resp) => {
    const arrMinusOne = resp.map((num) => {
      return num - 1;
    });
    console.log("Step 3👉  -1:", arrMinusOne);
    return arrMinusOne;
  })
  .then((resp) => {
    const arrModuloTwo = resp.map((num) => {
      return num % 2;
    });
    console.log("Step 4👉  %2:", arrModuloTwo);
    return arrModuloTwo;
  })
  .then((resp) => {
    console.log("Result 👉 ", resp);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Finished");
  });
