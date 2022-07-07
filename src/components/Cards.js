import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import Spinner from "./Spinner";
import Header from "./Header";

const Cards = () => {
  const { status, randomCards } = useContext(PokemonContext);

  return (
    <>
      <Header />
      <Main>
        {status === "loading" ? (
          <Spinner />
        ) : (
          <CardsContainer>
            {randomCards &&
              randomCards.map((card) => (
                <PokemonCard key={card.id} card={card} />
              ))}
          </CardsContainer>
        )}
      </Main>
    </>
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
  width: 100%;
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
