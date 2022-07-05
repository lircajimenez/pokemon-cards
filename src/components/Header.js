import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { Button } from "../style/GlobalStyles";
import styled from "styled-components";

const Header = () => {
  const { getNewDeck, getRandomCards } = useContext(PokemonContext);

  return (
    <Container>
      <Button onClick={getNewDeck} style={{ marginRight: "8px" }}>
        Get new deck
      </Button>
      <Button onClick={getRandomCards}>Get random cards</Button>
    </Container>
  );
};

const Container = styled.header`
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(240, 30%, 4%);
`;

export default Header;
