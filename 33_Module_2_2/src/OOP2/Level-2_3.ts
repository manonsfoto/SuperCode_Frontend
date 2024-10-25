import Customer from "./classes/Customer";

const customer1 = new Customer(
  "Minyeong Jeong",
  "megormin@gmail.com",
  "Musterstraße 123",
  " 12345",
  "Düsseldorf"
);

console.log(customer1);

customer1.name =
  "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
customer1.email = "ddd.";
customer1.postalCode = "0035g";

customer1.name = "Philip Heinrich";
customer1.email = "minyeong@gmail.com";

console.log(customer1);
