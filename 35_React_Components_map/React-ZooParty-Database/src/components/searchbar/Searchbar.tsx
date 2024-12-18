import { TCocktail } from "../../contracts/CocktailType";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  cocktails: TCocktail[] | null;
  setCocktails: React.Dispatch<React.SetStateAction<TCocktail[] | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const Searchbar: React.FC<Props> = (props) => {
  return (
    <section>
      <input
        onChange={(e) => {
          props.setSearch(e?.target.value);
        }}
        type="text"
        id="search"
        placeholder="Search for Drink"
      />
      <label htmlFor="search"></label>
      <button
        onClick={() => {
          props.setLoading(!props.loading);
        }}
        type="button"
      >
        Fetch
      </button>
    </section>
  );
};

export default Searchbar;
