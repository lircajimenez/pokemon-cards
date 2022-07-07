import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { Button } from "../style/GlobalStyles";
import styled from "styled-components";

const Header = () => {
  const { getNewDeck, getRandomCards } = useContext(PokemonContext);

  return (
    <Container>
      <LinkTo to="/">
        <VscHome />
      </LinkTo>
      <div>
        <ButtonDeck onClick={getNewDeck}>Get new deck</ButtonDeck>
        <ButtonCards onClick={getRandomCards}>Get random cards</ButtonCards>
      </div>
      <div></div>
    </Container>
  );
};

const Container = styled.nav`
  height: 90px;
  padding-left: 12px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(21, 33, 40);

  @media (min-width: 1920px) and (max-width: 3000px) {
    height: 10vh;
  }
`;

const LinkTo = styled(Link)`
  font-size: 2em;
  color: white;

  &:hover {
    color: rgb(168, 235, 18);
  }
`;

const ButtonDeck = styled(Button)`
  margin-right: 10px;
  background-color: rgb(44, 210, 97);
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;

  &:hover {
    background-color: rgb(120, 226, 154);
    color: black;
    text-shadow: 1px 1px 2px white;
    transition-duration: 800ms;
  }

  @media (min-width: 1920px) and (max-width: 3000px) {
    padding: 5px 45px;
    font-size: 1.5em;
    height: 55px;
  }
`;

const ButtonCards = styled(Button)`
  background-color: rgb(0, 143, 146);
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;

  &:hover {
    background-color: rgb(124, 222, 223);
    color: black;
    text-shadow: 1px 1px 2px white;
    transition-duration: 800ms;
  }

  @media (min-width: 1920px) and (max-width: 3000px) {
    padding: 5px 45px;
    font-size: 1.5em;
    height: 55px;
  }
`;

export default Header;
