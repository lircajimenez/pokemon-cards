import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const Cards = () => {
  const { randomCards } = useContext(PokemonContext);
  console.log(randomCards);
  return (
    <CardsContainer>
      {randomCards &&
        randomCards.map((card) => <PokemonCard key={card.id} card={card} />)}
    </CardsContainer>
  );
};

const CardsContainer = styled.section`
  max-width: 1250px;
  min-width: 280px;
  /* width: 1200px; */
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid red;
`;

export default Cards;
