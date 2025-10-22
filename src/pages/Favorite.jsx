import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";

function regSelector() {
  return createSelector(
    (state) => state.pokemon.data,
    (state) => state.favorite,
    (pokemon, favorite) => {
      return pokemon.filter((el) => favorite.includes(el.id));
    }
  );
}

export default function Favorite() {
  const pokemon = useSelector(regSelector());
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
