import Person2 from "./classes/Person2";
import Animal from "./classes/Animal";
import { Gender } from "./classes/Person2";
const cat = new Animal("Cat", 2, "Black");
console.log(cat);
cat.age = 99;
console.log(cat);

const person1 = new Person2("Minyeong", new Date(1990, 12, 19), Gender.female);
person1.name = "Philip";
console.log(person1);
