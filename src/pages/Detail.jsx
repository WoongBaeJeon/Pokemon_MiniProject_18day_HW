import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Detail.scss";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemonData = useSelector((state) => state.pokemon.data);

  if (!pokemonData?.length) return <div>로딩 중...</div>;

  const pokemon = pokemonData.find((el) => el.id === Number(pokemonId));

  if (!pokemon) return <div>포켓몬을 찾을 수 없습니다.</div>;

  return (
    <div className="DetailContainer">
      <div className="name">{pokemon.name}</div>
      <div className="genus">{pokemon.genus}</div>
      <div className="des">{pokemon.description}</div>
      <img src={pokemon.imgFront} />
    </div>
  );
}
