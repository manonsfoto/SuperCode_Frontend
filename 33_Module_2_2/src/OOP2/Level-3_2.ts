import Customer from "./classes/Customer";

const customer_2 = new Customer(
  "Minyeong Jeong",
  "megormin@gmail.com",
  "Musterstraße 123",
  " 12345",
  "Düsseldorf"
);

console.log(customer_2);

customer_2.email = "ddd@.c";

customer_2.email = "minyeong@gmail.com";

console.log(customer_2);
