import IEmployee from "../contracts/IEmployee";
import Employee from "./Employee";

class Manager extends Employee {
  private _assignedEmployees: IEmployee[] | undefined = [];

  constructor(name: string, age: number, position: string, startDate: Date) {
    super(name, age, position, startDate);
  }

  addSubordinate(newbie: IEmployee): void {
    this._assignedEmployees?.push(newbie);
  }
}

export default Manager;
