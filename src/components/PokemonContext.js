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
              "X-Api-Key": "f5b3f3b2-a557-401e-a7d7-ac88e821aff2",
            },
          }
        );
        const data = await res.json();
        console.log("fetch fired");
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
    const shuffled = copy.sort(() => 0.5 - Math.random());
    const result = shuffled.slice(0, 60);
    setRandomCards(result);
    console.log("random fired");
  };

  const getNewDeck = () => {
    setCounter((prevSate) => prevSate + 1);
    setStatus("loading");
    getRandomCards();
    console.log("counter fired");
  };

  return (
    <>
      <PokemonContext.Provider
        value={{
          randomCards,
          status,
          setStatus,
          getNewDeck,
          getRandomCards,
        }}
      >
        {children}
      </PokemonContext.Provider>
    </>
  );
};
