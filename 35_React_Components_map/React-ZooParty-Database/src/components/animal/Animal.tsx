import { TAnimal } from "../../../data";
import "./Animal.css";

interface propsAnimal {
  singleAnimal: TAnimal;
}

const Animal: React.FC<propsAnimal> = (props) => {
  return (
    <article className="flex card">
      <div className="flex">
        <h3>{props.singleAnimal.emoji}</h3>
        <h2>{props.singleAnimal.name}</h2>
        <p>{props.singleAnimal.species}</p>
        <p>{props.singleAnimal.habitat}</p>
        <p>{props.singleAnimal.diet}</p>
        <p>{props.singleAnimal.lifespan} years</p>
      </div>
      <div className="funfact flex">
        <ul>
          {props.singleAnimal.funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Animal;
