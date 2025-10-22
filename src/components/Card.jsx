import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteBtn from "./FavoriteBtn";
import { memo } from "react";

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 10px;

  img {
    width: 130px;
  }
`;

export const Card = memo(({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.imgFront} alt="" />
      <div>
        {pokemon.name}
        <FavoriteBtn pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});

// {pokemonData.data.map((el) => (
//   <section>
//     <div>{el.name}</div>
//     {/* <img src={el.imgFront} alt="" /> */}
//   </section>
// ))}
