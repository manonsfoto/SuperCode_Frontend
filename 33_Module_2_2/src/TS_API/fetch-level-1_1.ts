const BASE_URL = "https://picsum.photos/v2/";
const LIST_URL = BASE_URL + "list";
async function fetchPicsumPhotos(url: string) {
  try {
    const response = await fetch(url);

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
fetchPicsumPhotos(LIST_URL);
