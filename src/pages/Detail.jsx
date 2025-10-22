import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import FavoriteBtn from "../components/FavoriteBtn";
// import { selectPokemonById } from "../RTK/selector";
import FlipCard from "../components/FilpCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemonData = useSelector((state) => state.pokemon.data);

  if (!pokemonData?.length) return <div>로딩 중...</div>;

  const pokemon = pokemonData.find((el) => el.id === Number(pokemonId));

  if (!pokemon) return <div>포켓몬을 찾을 수 없습니다.</div>;

  // const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <article className="DetailContainer">
      <p className="name">
        {pokemon.name}
        <FavoriteBtn pokemonId={pokemon.id} />
      </p>
      <p className="genus">{pokemon.genus}</p>
      <p className="des">{pokemon.description}</p>
      {/* <img src={pokemon.imgFront} /> */}
      <FlipCard front={pokemon.imgFront} back={pokemon.imgBack} />
    </article>
  );
}
