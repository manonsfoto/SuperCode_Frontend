import IEmployee from "../contracts/IEmployee";

class Employee implements IEmployee {
  _name: string;
  _age: number;
  _position: string;
  _startDate: Date;

  constructor(name: string, age: number, position: string, startDate: Date) {
    this._name = name;
    this._age = age;
    this._position = position;
    this._startDate = startDate;
  }

  getYearsOfService(): number {
    const currentYear: number = new Date().getFullYear();
    const yearsOfService: number = currentYear - this._startDate.getFullYear();
    console.log(`${this._name}'s years of Service: ${yearsOfService} year(s)`);

    return yearsOfService;
  }
}

export default Employee;
