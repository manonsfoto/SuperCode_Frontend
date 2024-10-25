import Validator from "./Validator";

class Customer {
  private _name: string;
  private _email: string;
  private _address: string;
  private _postalCode: string;
  private _city: string;

  constructor(
    name: string,
    email: string,
    address: string,
    postalCode: string,
    city: string
  ) {
    this._name = name;
    this._email = email;
    this._address = address;
    this._postalCode = postalCode;
    this._city = city;
  }
  // !=== 1. name ==========================

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length <= 60) {
      this._name = value;
    } else {
      console.error("The name can not be over 60 characters long.");
    }
  }
  // !=== 2. email ==========================
  get email() {
    return this._email;
  }

  set email(value: string) {
    if (Validator.validateEmail(value)) {
      this._email = value;
    } else {
      console.error("Invalid Email.");
    }
  }

  // !=== 3. address ==========================

  get address() {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  // !=== 4. postalCode ==========================

  get postalCode() {
    return this._postalCode;
  }

  set postalCode(value: string) {
    if (Number(value) >= 0 && Number(value) <= 99999 && value.length === 5) {
      this._postalCode = value;
    } else {
      console.error(
        "Invalid zip code. It must be 5 digits long and between 00000 and 99999."
      );
    }
  }

  // !=== 5. city ==========================

  get city() {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }
}

export default Customer;
