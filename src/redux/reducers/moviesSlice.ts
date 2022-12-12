import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movies } from "../../api-hooks/movies.model";
import axios from "axios";

export interface MoviesProps {
  search?: string;
  page?: number;
}

function fetchMovies(props: MoviesProps) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const { search = "man", page = 1 } = props;

  return `http://omdbapi.com/?apikey=${apiKey}&s=${search}&page=${page}`;
}

export const getMoviesApi = createAsyncThunk(
  "movies",
  async (props: MoviesProps) => {
    try {
      const res = await axios.get(fetchMovies(props));
      return res.data;
    } catch (err) {
      return err;
    }
  }
);

export interface MoviesState {
  movies?: Movies;
  loading: boolean;
}

const initialState: MoviesState = {
  movies: undefined,
  loading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesApi.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getMoviesApi.fulfilled, (state, action) => {
      const data = action.payload as Movies;
      return { ...state, news: data, loading: false };
    });
    builder.addCase(getMoviesApi.rejected, (state, action) => {
      return { ...state, loading: false };
    });
  },
});

export default moviesSlice.reducer;
