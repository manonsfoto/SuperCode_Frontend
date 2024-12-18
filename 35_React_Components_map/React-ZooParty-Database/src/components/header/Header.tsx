import { TCocktail } from "../../contracts/CocktailType";
import Searchbar from "../searchbar/Searchbar";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  cocktails: TCocktail[] | null;
  setCocktails: React.Dispatch<React.SetStateAction<TCocktail[] | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const Header: React.FC<Props> = ({
  setCocktails,
  cocktails,
  search,
  setSearch,
  setLoading,
  loading,
}) => {
  return (
    <section className="header">
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <Searchbar
          setCocktails={setCocktails}
          cocktails={cocktails}
          search={search}
          setSearch={setSearch}
          setLoading={setLoading}
          loading={loading}
        />
      </ul>
    </section>
  );
};

export default Header;
