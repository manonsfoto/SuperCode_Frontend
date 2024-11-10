// !====================================
// !======= Callback-TS-Level-1_3 ======
// !====================================

function sayHello(name: string, callback: (message: string) => void) {
  callback(name);
}

function greetingCallback(name: string) {
  console.log(`Hello ${name}!`);
}

sayHello("Minyeong", greetingCallback);
sayHello("Philip", greetingCallback);
sayHello("Viviana", greetingCallback);

// !====================================
// !======= Promise-TS-Level-1_4 =======
// !====================================

const promise_1: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Exercise 1 done.");
  }, 2000);
});
const promise_2: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Exercise 2 done.");
  }, 4000);
});
const promise_3: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Exercise 3 done.");
  }, 6000);
});

const displayParagraph = document.querySelector(
  "#displayParagraph"
) as HTMLParagraphElement;

Promise.all([promise_1, promise_2, promise_3])
  .then((resp: [string, string, string]) => {
    resp.forEach((result: string) => {
      displayParagraph.innerHTML += `<br>${result}`;
    });
  })
  .finally(() => (displayParagraph.innerHTML += `<br>Homework done`));

// !====================================
// !====== Callback-TS-Level-2_2 =======
// !====================================
console.log("=======================");

function processData(
  numArr: number[],
  callback1: (numArr: number[]) => number[],
  callback2: (numArr: number[]) => number[]
): Map<number, string> {
  const resultArr: number[] = callback2(callback1(numArr));
  const processedDataMap = new Map();

  resultArr.forEach((num) => {
    processedDataMap.set(num, num.toString(16));
  });
  console.log(processedDataMap);

  return processedDataMap;
}

function sortArr(numArr: number[]) {
  const sortedArr: number[] = numArr.sort((a, b) => b - a);
  console.log(sortedArr);

  return sortedArr;
}

function doubleArr(numArr: number[]) {
  const doubledArr: number[] = numArr.map((num: number) => num * 2);
  console.log(doubledArr);

  return doubledArr;
}

const numArr_1: number[] = [1, 19, 23, 45, 2, 21];
const numArr_2: number[] = [21, 2, 13, 65, 22, 1];
processData(numArr_1, sortArr, doubleArr);
processData(numArr_2, sortArr, doubleArr);
