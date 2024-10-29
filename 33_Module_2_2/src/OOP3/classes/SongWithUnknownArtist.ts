import Song from "./Song";

class SongWithUnknownArtist extends Song {
  constructor(title: string) {
    super(title, "Unknown");
  }

  setArtist(name: string) {
    this._artist = name;
  }
}

export default SongWithUnknownArtist;
