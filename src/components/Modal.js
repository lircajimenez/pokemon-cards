import { Button } from "../style/GlobalStyles";
import styled from "styled-components";

const Modal = ({ setOpenModal, card }) => {
  return (
    <Background>
      <Container>
        <Body>
          <CardImage>
            <img src={card.images.large} alt={`Card of ${card.name}`} />
          </CardImage>
          <CardInfo>
            <Title>
              <h3>{card.name}</h3>
              <span>{card.supertype}</span>
            </Title>
            <Info style={{ textAlign: "left" }}>
              <p>
                <Bold>Series:</Bold> {card.set.series}
              </p>
              <p>
                <Bold>Subtype:</Bold> {card.subtypes ? card.subtypes : "N/A"}
              </p>
              <p>
                <Bold>Type:</Bold> {card.types ? card.types : "N/A"}
              </p>
              <p>
                <Bold>Rarity:</Bold> {card.rarity ? card.rarity : "N/A"}
              </p>
              <p>
                <Bold>Pokedex Number:</Bold>{" "}
                {card.nationalPokedexNumbers
                  ? card.nationalPokedexNumbers
                  : "N/A"}
              </p>
              {card.evolvesFrom && (
                <p>
                  <Bold>Evolves from:</Bold> {card.evolvesFrom}
                </p>
              )}
              {card.evolvesTo && (
                <p>
                  <Bold>Evolves to:</Bold> {card.evolvesTo}
                </p>
              )}
              <p>
                <Bold>Artist:</Bold> {card.artist}
              </p>
            </Info>
            {card.flavorText && <FlavorText>{card.flavorText}</FlavorText>}
            <Logo>
              <img
                src={card.set.images.logo}
                alt={`Logo of ${card.set.name}`}
              />
            </Logo>
          </CardInfo>
        </Body>
        <ButtonM onClick={() => setOpenModal(false)}>Close</ButtonM>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: auto;
`;

const Container = styled.div`
  width: 60vw;
  padding: 25px 15px;
  border-radius: 12px;
  background-color: white;
  color: rgb(30, 30, 52);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 200px) and (max-width: 620px) {
    width: 85vw;
    height: 95vh;
    overflow: auto;
  }
`;

const Body = styled.div`
  width: 90%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 200px) and (max-width: 620px) {
    flex-direction: column;
  }
`;

const CardImage = styled.div`
  width: 45%;
  display: flex;
  align-items: center;

  @media (min-width: 200px) and (max-width: 620px) {
    width: 80%;
    align-self: center;
  }
`;

const Title = styled.div`
  width: 100%;
  border-bottom: 3px solid black;
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align: center;

  h3 {
    font-size: 1.75em;
    margin-top: 10px;
  }
`;

const CardInfo = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 200px) and (max-width: 620px) {
    font-size: 0.85em;
    width: 100%;
  }

  @media (min-width: 1920px) and (max-width: 3000px) {
    font-size: 1.5em;
  }
`;

const Info = styled.div`
  text-align: left;
  line-height: 2;
  margin-bottom: 5px;
`;

const FlavorText = styled.p`
  padding: 0 5px;
`;

const Logo = styled.div`
  margin-top: 10px;

  img {
    width: 180px;
    max-width: 200px;

    @media (min-width: 200px) and (max-width: 620px) {
      width: 120px;
    }

    @media (min-width: 1920px) and (max-width: 3000px) {
      width: 300px;
    }
  }
`;

const ButtonM = styled(Button)`
  background-color: rgb(230, 24, 127);
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;

  &:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
  }

  @media (min-width: 200px) and (max-width: 620px) {
    padding: 10px 20px;
    font-size: 0.85em;
  }

  @media (min-width: 1920px) and (max-width: 3000px) {
    padding: 10px 45px;
    font-size: 1.5em;
    height: 55px;
  }
`;

const Bold = styled.span`
  font-weight: 800;
`;

export default Modal;
