import Car2, { CarType } from "./Car2";

class Driver {
  _firstName: string;
  _lastName: string;
  _age: number;
  _car: Car2;
  private _licenseFromYear: number;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    car: Car2,
    licenseFromYear: number
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._car = car;
    this._licenseFromYear = licenseFromYear;
  }

  get licenseFromYear() {
    return this._licenseFromYear;
  }

  getCarType(): CarType {
    console.log(this._car._carType);

    return this._car._carType;
  }
}

export default Driver;
