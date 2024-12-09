import "./AnimalList.css";
import animals from "../../../data";
import Animal from "../animal/Animal";
const AnimalList = () => {
  return (
    <section className="flex section_animalList">
      <h1>Zoo Party DB</h1>
      <p>Explore the fascinating world of zoo animals!</p>
      <div className="flex animal_container">
        {animals.map((singleAnimal, index) => (
          <Animal key={index} singleAnimal={singleAnimal} />
        ))}
      </div>
    </section>
  );
};

export default AnimalList;
