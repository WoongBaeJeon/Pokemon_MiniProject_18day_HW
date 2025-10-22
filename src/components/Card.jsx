import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteBtn from "./FavoriteBtn";
import { memo, useState } from "react";

const CardContainer = styled.article`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 10px;
  cursor: pointer;

  img {
    width: 130px;
  }
`;

export const Card = memo(({ pokemon }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImageLoading ? (
        <div className="w-[130px] h-[130px] leading-[130px} text-center">
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.imgFront}
        alt={`${pokemon.name} 이미지`}
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <p>
        {pokemon.name}
        <FavoriteBtn pokemonId={pokemon.id} />
      </p>
    </CardContainer>
  );
});

// {pokemonData.data.map((el) => (
//   <section>
//     <div>{el.name}</div>
//     {/* <img src={el.imgFront} alt="" /> */}
//   </section>
// ))}
