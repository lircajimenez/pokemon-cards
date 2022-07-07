import pikachu from "../assets/pikachu.gif";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Wrapper>
      <img src={pikachu} alt="Pikachu running serving as a loading spinner" />
      <span>loading...</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.25em;
  letter-spacing: 1px;

  img {
    width: 150px;
    margin-bottom: 15px;
  }
`;

export default Spinner;
