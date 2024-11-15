import { IPicsumPhotos } from "./interface/IPicsumPhotos";

const BASE_URL = "https://picsum.photos/v2/";
const LIST_URL = BASE_URL + "list";
async function fetchPicsumPhotos(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

const display = document.querySelector("#display") as HTMLDivElement;

const photos = fetchPicsumPhotos(LIST_URL) as Promise<IPicsumPhotos[]>;

photos.then((response) => {
  response.forEach((elt: IPicsumPhotos) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `<figure>
	<img src="${elt.download_url}">
	<figcaption>${elt.author}</figcation>
</figure>`;
    display.appendChild(cardDiv);
  });
});
