import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

export default function FavoriteBtn({ pokemonId }) {
  const isFavoriteState = useSelector((state) =>
    state.favorite.some((id) => id === pokemonId)
  );
  const dispatch = useDispatch();
  // console.log(isFavoriteState);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavoriteState
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
      className="text-[red]"
    >
      {isFavoriteState ? "★" : "☆"}
    </button>
  );
}
