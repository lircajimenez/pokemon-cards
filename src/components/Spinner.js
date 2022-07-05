import pikachu from "../assets/pikachu.gif";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Wrapper>
      <img src={pikachu} />
      {/* <span>loading</span> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    margin-bottom: 5px;
  }
`;

export default Spinner;
