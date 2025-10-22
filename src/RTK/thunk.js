import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemonDataById = createAsyncThunk(
  "pokemon/fetchPokemonDataById",
  async (maxPokemonId, { rejectWithValue }) => {
    try {
      const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);

      const fetchAPI = async (pokemonId) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
        );
        const data = await response.json();

        const pokemonData = {
          id: data.id, //`${pokemonId}`,
          name: data.names.find((el) => el.language.name === "ko").name,
          description: data.flavor_text_entries.find(
            (el) => el.language.name === "ko" && el.version.name === "x"
          ).flavor_text,
          genus: data.genera.find((el) => el.language.name === "ko").genus,
          imgFront: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          imgBack: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        };
        return pokemonData;
      };

      return await Promise.all(numberArray.map((el) => fetchAPI(el)));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
