const addToFifty = () => {
  let sum: number = 0;

  for (let i: number = 1; sum < 50; i++) {
    let randomNum = Math.ceil(Math.random() * 10);
    sum += randomNum;

    console.log(randomNum);
  }

  console.log(`'${sum} > 50. Stopping right here.'`);
};

addToFifty();
