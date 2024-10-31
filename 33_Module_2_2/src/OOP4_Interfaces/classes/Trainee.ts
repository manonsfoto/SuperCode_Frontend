import Employee from "./Employee";

class Trainee extends Employee {
  constructor(name: string, age: number, startDate: Date) {
    super(name, age, "Trainee", startDate);
  }
}

export default Trainee;
