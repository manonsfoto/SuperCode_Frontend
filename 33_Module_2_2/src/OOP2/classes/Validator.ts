import * as EmailValidator from "email-validator";

class Validator {
  static validateEmail(email: string): boolean {
    return EmailValidator.validate(email);
  }
}

export default Validator;
