import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";
import styled, { keyframes } from "styled-components";
import { Button } from "../style/GlobalStyles";
import pokemonLogo from "../assets/pokemon.png";
import pikachu from "../assets/pikachu-logo.svg";
import charizard from "../assets/charizard.svg";

const Home = () => {
  const navigate = useNavigate();
  const { getRandomCards } = useContext(PokemonContext);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={pokemonLogo} alt="Pokemon logo" />
          <div>
            <Title>Gotta Catch'Em All!</Title>
            <P>
              Draw sixty random pokémon cards from a<br />
              deck of two-hundred and fifty cards.
            </P>
          </div>
          <div style={{ alignSelf: "center" }}>
            <ButtonC
              onClick={() => {
                getRandomCards();
                navigate("/cards");
              }}
            >
              Get cards
            </ButtonC>
          </div>
        </Left>
        <Rigth>
          <Charizard src={charizard} alt="Charizard" />
          <Pikachu src={pikachu} alt="Pikachu" />
        </Rigth>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 75vw;
  padding: 30px 25px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.4px);
  -webkit-backdrop-filter: blur(6.4px);
  border: 1px solid rgba(255, 255, 255, 0.6);

  @media (min-width: 200px) and (max-width: 620px) {
    flex-direction: column;
    align-items: center;
    height: 80vh;
  }

  @media (min-width: 1920px) and (max-width: 3000px) {
    height: 60vh;
  }
`;

const Left = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 200px) and (max-width: 620px) {
    width: 100%;
    height: 70%;
    font-size: 0.7em;
    justify-content: space-around;
  }

  @media (min-width: 1920px) and (max-width: 3000px) {
    font-size: 1.65em;
  }
`;

const Logo = styled.img`
  width: 180px;

  @media (min-width: 200px) and (max-width: 620px) {
    width: 90px;
  }

  @media (min-width: 1920px) and (max-width: 3000px) {
    width: 220px;
  }
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;

const P = styled.p`
  font-size: 1.15em;
  letter-spacing: 0.5px;
`;

const scale = keyframes`
0% { transform: scale(0) }
2% { transform: scale(0.02) }
5% { transform: scale(0.05) }
8% { transform: scale(0.07) }
10% { transform: scale(0.10) }
13% { transform: scale(0.13) }
15% { transform: scale(0.15) }
17% { transform: scale(0.17) }
20% { transform: scale(0.20) }
22% { transform: scale(0.23) }
25% { transform: scale(0.25) }
28% { transform: scale(0.28) }
30% { transform: scale(0.30) }
32% { transform: scale(0.32) }
35% { transform: scale(0.35) }
37% { transform: scale(0.37) }
40% { transform: scale(0.40) }
43% { transform: scale(0.43) }
45% { transform: scale(0.45) }
48% { transform: scale(0.48) }
50% { transform: scale(0.50) }
52% { transform: scale(0.52) }
55% { transform: scale(0.55) }
58% { transform: scale(0.58) }
60% { transform: scale(0.60) }
63% { transform: scale(0.63) }
65% { transform: scale(0.65) }
67% { transform: scale(0.67) }
70% { transform: scale(0.70) }
72% { transform: scale(0.72) }
75% { transform: scale(0.75) }
78% { transform: scale(0.78) }
80% { transform: scale(0.80) }
83% { transform: scale(0.83) }
85% { transform: scale(0.85) }
87% { transform: scale(0.87) }
90% { transform: scale(0.90) }
93% { transform: scale(0.93) }
95% { transform: scale(0.95) }
97% { transform: scale(0.97) }
100% { transform: scale(1) }
`;

const Rigth = styled.div`
  width: 45%;
  align-self: center;
  animation: ${scale} 5s linear;
`;

const Charizard = styled.img`
  width: 500px;

  @media (min-width: 200px) and (max-width: 620px) {
    display: none;
  }
`;

const Pikachu = styled.img`
  display: none;
  width: 200px;

  @media (min-width: 200px) and (max-width: 620px) {
    display: block;
  }
`;

const ButtonC = styled(Button)`
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
`;

export default Home;
