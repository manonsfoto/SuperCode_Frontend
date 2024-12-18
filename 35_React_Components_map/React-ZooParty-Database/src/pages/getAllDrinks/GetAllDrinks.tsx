import { useEffect } from "react";
import { apiLink } from "../../utils/api/Api";
import { TCocktail } from "../../contracts/CocktailType";
import { v4 as uuidv4 } from "uuid";
import DrinksItem from "../../components/drinksItem/DrinksItem";

type Props = {
  setCocktails: React.Dispatch<React.SetStateAction<TCocktail[] | null>>;
  cocktails: TCocktail[] | null;
  search: string;
  loading: boolean;
};

const GetAllDrinks: React.FC<Props> = ({
  cocktails,
  setCocktails,
  search,
  loading,
}) => {
  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch(
          search ? `${apiLink + search}` : `${apiLink}margarita`
        );
        if (!response.ok) {
          throw new Error("Error while fetching");
        }

        const data = await response.json();
        setCocktails(data.drinks || []);
      } catch (err: unknown) {
        console.error(err);
      }
    };

    fetchCocktails();
  }, [setCocktails, loading, search]);

  return (
    <>
      {cocktails && cocktails.length > 0 ? (
        cocktails.map((cocktail) => (
          <section key={uuidv4()}>
            <DrinksItem cocktail={cocktail} />
          </section>
        ))
      ) : (
        <p>No Cocktails found</p>
      )}
    </>
  );
};

export default GetAllDrinks;
