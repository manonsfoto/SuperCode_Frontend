const promise_1: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Exercise 1 done.");
  }, 2000);
});
const promise_2: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Exercise 2 done.");
  }, 4000);
});
const promise_3: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Exercise 3 done.");
  }, 6000);
});

const displayParagraph = document.querySelector(
  "#displayParagraph"
) as HTMLParagraphElement;

promise_1
  .then((resp) => {
    displayParagraph.textContent = resp;
  })
  .then(() => {
    promise_2.then((resp) => {
      displayParagraph.textContent = resp;
    });
  })
  .then(() => {
    promise_3.then((resp) => {
      displayParagraph.textContent = resp;
    });
  });
