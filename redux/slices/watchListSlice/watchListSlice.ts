import { IMovie } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IMovie[] = [];
const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<IMovie>) => {
      const alreadyInCart = state.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (!alreadyInCart) {
        state.push({ ...action.payload });
      }
    },

    removeFromWatchList: (state, action: PayloadAction<string>) => {
      const movieImdbId = action.payload;
      return state.filter((movie) => movie.imdbID !== movieImdbId);
    },
  },
});
export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
