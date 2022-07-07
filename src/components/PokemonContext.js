import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [allCards, setAllCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const getCards = async () => {
      try {
        const res = await fetch(
          `https://api.pokemontcg.io/v2/cards?pageSize=250&page=${counter}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "f29778c0-a71d-499e-a234-2f9f677900d6",
            },
          }
        );
        const data = await res.json();
        setAllCards(data.data);
        setStatus("idle");
      } catch (err) {
        console.error(err);
      }
    };
    getCards();
  }, [counter]);

  const getRandomCards = () => {
    const copy = [...allCards];
    const shuffle = copy.sort(() => 0.5 - Math.random());
    const result = shuffle.slice(0, 60);
    setRandomCards(result);
  };

  const getNewDeck = () => {
    setCounter((prevSate) => prevSate + 1);
    setStatus("loading");
    getRandomCards();
  };

  let isDisabled;
  if (status === "loading") {
    isDisabled = true;
  } else if (status === "idle") {
    isDisabled = false;
  }

  return (
    <>
      <PokemonContext.Provider
        value={{
          randomCards,
          status,
          isDisabled,
          getNewDeck,
          getRandomCards,
        }}
      >
        {children}
      </PokemonContext.Provider>
    </>
  );
};
