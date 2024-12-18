import { useState } from "react";
import { TCocktail } from "../../contracts/CocktailType";
import "./Home.css";
import GetAllDrinks from "../getAllDrinks/GetAllDrinks";
import Header from "../../components/header/Header";

const Home = () => {
  const [cocktails, setCocktails] = useState<TCocktail[] | null>(null);

  const [search, setSearch] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <header>
        <Header
          search={search}
          setSearch={setSearch}
          cocktails={cocktails}
          setCocktails={setCocktails}
          setLoading={setLoading}
          loading={loading}
        />
      </header>
      <main>
        <GetAllDrinks
          cocktails={cocktails}
          setCocktails={setCocktails}
          search={search}
          loading={loading}
        />
      </main>
    </>
  );
};

export default Home;
