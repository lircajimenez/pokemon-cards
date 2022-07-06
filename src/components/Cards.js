import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const Cards = () => {
  const { randomCards } = useContext(PokemonContext);
  console.log(randomCards);
  return (
    <Main>
      <CardsContainer>
        {randomCards &&
          randomCards.map((card) => <PokemonCard key={card.id} card={card} />)}
      </CardsContainer>
    </Main>
  );
};

const Main = styled.main`
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
`;

const CardsContainer = styled.div`
  max-width: 85vw;
  min-width: 280px;
  margin: 0 auto;
  padding: 25px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Cards;
