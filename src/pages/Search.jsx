import { createSelector } from "@reduxjs/toolkit";
import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";

function regSelector(reg) {
  return createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);
  const pokemon = useSelector(regSelector(reg));

  // console.log("search : " + pokemon);
  return pokemon.map((el) => <Card key={el.id} pokemon={el} />);
}
