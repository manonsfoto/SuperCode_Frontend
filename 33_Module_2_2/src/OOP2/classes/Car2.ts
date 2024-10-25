class Car2 {
  _brand: string;
  private _constructionYear: number;
  _currentSpeed: number;
  _carType: CarType;
  constructor(
    brand: string,
    constructionYear: number,
    currentSpeed: number,
    carType: CarType
  ) {
    this._brand = brand;
    this._constructionYear = constructionYear;
    this._currentSpeed = currentSpeed;
    this._carType = carType;
  }

  get constructionYear() {
    return this._constructionYear;
  }

  getSpeedInfo() {
    switch (true) {
      case this._currentSpeed <= 40:
        return "Driving slowly";

      case this._currentSpeed <= 70:
        return "Driving normally";

      case this._currentSpeed <= 120:
        return "Driving fast";

      case this._currentSpeed <= 190:
        return "Driving really fast";

      case this._currentSpeed > 190:
        return "☠️";
    }
  }
}

export enum CarType {
  Unknown = "Unknown",
  Sedan = "Sedan",
  SUV = "SUV",
  Coupe = "Coupe",
  Convertible = "Convertible",
  Hatchback = "Hatchback",
  Truck = "Truck",
}
export default Car2;
