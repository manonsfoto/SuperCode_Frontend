import { IPost, IPost2 } from "./interface/IPost";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

function generateCommentsURL(id: number) {
  const COMMENTS_URL = `${BASE_URL}${id}/comments`;
  return COMMENTS_URL;
}

async function fetchPosts(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}

const emails = fetchPosts(generateCommentsURL(1)) as Promise<IPost[]>;

emails.then((response) => {
  response.forEach((elt) => {
    console.log(elt.email);
  });
});

const allPost = fetchPosts(BASE_URL) as Promise<IPost2[]>;
console.log(allPost);

allPost
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    const IdNumberArry: number[] = response.map((elt) => {
      return elt.id;
    });
    let max = IdNumberArry.reduce((accumulator, currentValue) => {
      return Math.max(accumulator, currentValue);
    }, IdNumberArry[0]);

    const biggestIdNum = response.find((elt) => elt.id === max);

    console.log("höchste Post-Id: ", biggestIdNum);
    return response;
  })
  .then((response) => {
    const titleLengthArray: number[] = response.map((elt) => {
      return elt.title.length;
    });
    let min = titleLengthArray.reduce((accumulator, currentValue) => {
      return Math.min(accumulator, currentValue);
    }, titleLengthArray[0]);
    console.log(min);

    const shortestTitle = response.find((elt) => elt.title.length === min);

    console.log("kürzesten Titel: ", shortestTitle);
    return response;
  })
  .then((response) => {
    const bodyLengthArray: number[] = response.map((elt) => {
      return elt.body.length;
    });
    let max = bodyLengthArray.reduce((accumulator, currentValue) => {
      return Math.max(accumulator, currentValue);
    }, bodyLengthArray[0]);
    console.log(max);

    const longestBody = response.find((elt) => elt.body.length === max);

    console.log("längsten Body: ", longestBody);
  });
