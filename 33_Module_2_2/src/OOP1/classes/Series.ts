import Episode from "./Episode";

class Series {
  _title: string;
  _description: string;
  _startYear: number;
  _endYear: number;
  _episodes: Episode[];

  constructor(
    title: string,
    description: string,
    startYear: number,
    endYear: number,
    episodes: Episode[]
  ) {
    this._title = title;
    this._description = description;
    this._startYear = startYear;
    this._endYear = endYear;
    this._episodes = episodes;
  }

  addEpisode(newEpisode: Episode): void {
    this._episodes.push(newEpisode);
  }
}

export default Series;
