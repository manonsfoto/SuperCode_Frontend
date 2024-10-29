import Song from "./classes/Song";
import SongWithUnknownArtist from "./classes/SongWithUnknownArtist";

const song1 = new Song("Whiplash", "Aespa");
const song2 = new Song("APT.", "Rosé");

song1._durationInSeconds = 3 * 60 + 3;
song2._durationInSeconds = 2 * 60 + 49;

console.log(song1);
console.log(song2);

const unknownSong1 = new SongWithUnknownArtist("Moonlight");

console.log(unknownSong1);
unknownSong1.setArtist("Kali Uchis");

console.log(unknownSong1);
