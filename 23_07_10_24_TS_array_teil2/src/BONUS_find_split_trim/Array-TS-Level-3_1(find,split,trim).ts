let artworks: string[] = [
  "Die Sternennacht - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "Die Geburt der Venus - Sandro Botticelli",
  "Die Nachtwache - Rembrandt",
  "Die Mona Lisa - Leonardo da Vinci",
  "Die Kartoffelesser - Vincent van Gogh",
  "Die Schrei - Edvard Munch",
  "Das letzte Abendmahl - Leonardo da Vinci",
  "Die freudige Botschaft - James Tissot",
  "Der Garten der Lüste - Hieronymus Bosch",
];
let artworkDates: string[] = [
  "Die Sternennacht - 1889",
  "Guernica - 1937",
  "Die Geburt der Venus - 1486",
  "Die Nachtwache - 1642",
  "Die Mona Lisa - 1503",
  "Die Kartoffelesser - 1885",
  "Die Schrei - 1893",
  "Das letzte Abendmahl - 1495",
  "Die freudige Botschaft - 1885",
  "Der Garten der Lüste - 1505",
];

function searchArtwork(artworkName: string) {
  if (artworkName.trim() === "") {
    console.log("Bitte geben Sie einen Namen ein.");
    return;
  }
  const singleArtwork: string = artworks.find((a) =>
    a.toLowerCase().includes(artworkName.toLowerCase())
  )!;
  const singleArtworkDate: string = artworkDates.find((b) =>
    b.toLowerCase().includes(artworkName.toLowerCase())
  )!;

  if (!singleArtwork || !singleArtworkDate) {
    console.log(`Artwork '${artworkName}' not found.`);
    return;
  }

  const title: string = singleArtworkDate.split("-")[0].trim();
  const jahr: string = singleArtworkDate.split("-")[1].trim();
  const artist: string = singleArtwork.split("-")[1].trim();

  console.log(`'${title}' wurde von ${artist} im Jahre ${jahr} gemalt.`);
}

searchArtwork("Der Garten der Lüste");
searchArtwork("die schrei");
searchArtwork("die schredfsfd");
searchArtwork("rerrwer");
searchArtwork("");
searchArtwork(" ");
