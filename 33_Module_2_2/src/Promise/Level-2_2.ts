const lorem: string =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

const loremArr: string[] = lorem.split(" ");
function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
  return new Promise((resolve, reject) => {
    if (numberOfWords > 50) {
      reject("Number of words cannot exceed 50");
    } else {
      const slicedLoremArr: string[] = loremArr.slice(0, numberOfWords);
      console.log(slicedLoremArr);

      resolve(slicedLoremArr);
    }
  });
}

generateLoremIpsum(42)
  .then((resp: string[]) => {
    const firstChangedArr = resp.map((wort) => wort.toUpperCase());
    console.log(firstChangedArr);
    return firstChangedArr;
  })
  .then((resp: string[]) => {
    const secondChangedArr: string[] = resp.map((word) =>
      word.replaceAll("L", "").replaceAll("U", "").replaceAll("T", "")
    );
    console.log(secondChangedArr);
    return secondChangedArr;
  })
  .then((resp: string[]) => {
    const thirdChangedArr = resp.filter((wort) => wort.length > 8);
    console.log(thirdChangedArr);
    return thirdChangedArr;
  })
  .then((resp: string[]) => {
    const fourthChangedArr = resp.join(" ");
    console.log(fourthChangedArr);
    return fourthChangedArr;
  })
  .catch((err) => console.error(err));
