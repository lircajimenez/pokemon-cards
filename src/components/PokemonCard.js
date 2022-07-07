import { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const PokemonCard = ({ card }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrapper
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setOpenModal(true);
          }
        }}
      >
        <img
          src={card.images.small}
          alt={`Card of ${card.name}`}
          onClick={() => setOpenModal(true)}
        />
      </Wrapper>
      {openModal && <Modal setOpenModal={setOpenModal} card={card} />}
    </>
  );
};

const Wrapper = styled.div`
  margin: 12px;

  img {
    width: 200px;
    height: 100%;

    @media (min-width: 200px) and (max-width: 620px) {
      width: 120px;
    }

    @media (min-width: 1920px) and (max-width: 3000px) {
      width: 300px;
    }
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 300ms;
  }
`;

export default PokemonCard;
