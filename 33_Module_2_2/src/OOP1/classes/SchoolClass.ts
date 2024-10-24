import Person from "./Person";
class SchoolClass {
  _id: string;
  _name: string;
  _personen: Person[];
  _endDate?: number;

  constructor(id: string, name: string, personen: Person[]) {
    this._id = id;
    this._name = name;
    this._personen = personen;
    console.log("School class creation successful");
  }

  addPerson(newPerson: Person): void {
    this._personen.push(newPerson);
  }
}
export default SchoolClass;
