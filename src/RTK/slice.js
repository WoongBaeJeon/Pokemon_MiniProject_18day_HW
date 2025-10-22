import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonDataById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  //reducers 동기적으로 상태를 변경할 때
  reducers: {},
  //extraReducers 비동기적으로 상태를 변강할 때
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonDataById.rejected, (state, action) => {
        state.loading = false;
        state.data = action.error.payload;
      })
      .addCase(fetchPokemonDataById.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      });
  },
});

export const favoriteSlice = createSlice({
  name: "Favorite",
  initialState: [3, 6, 9],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
