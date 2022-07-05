import { useContext } from "react";
import { PokemonContext } from "./components/PokemonContext";
import { GlobalStyles } from "./style/GlobalStyles";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

const App = () => {
  const { status } = useContext(PokemonContext);

  return (
    <>
      <GlobalStyles />
      <Header />
      {status === "loading" ? <Spinner /> : <Cards />}
    </>
  );
};

export default App;
