export enum Gender {
  male = "Male",
  female = "Female",
  other = "Other",
}
class Person2 {
  private _name: string;
  private _birthday: Date;
  private _gender: Gender;

  constructor(name: string, birthday: Date, gender: Gender) {
    this._name = name;
    this._birthday = birthday;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get birthday() {
    return this._birthday;
  }
  get gender() {
    return this._gender;
  }

  set gender(value: Gender) {
    this._gender = value;
  }
}

export default Person2;
