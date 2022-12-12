import * as React from "react";
import { useSelector } from "react-redux";
import { getMoviesApi, MoviesProps } from "../redux/reducers/moviesSlice";
import { ListReducers, useAppDispatch } from "../redux/store";

export default function useGetMovies(props: MoviesProps) {
  const { movies, loading } = useSelector(
    (state: ListReducers) => state.movies
  );
  const dispatch = useAppDispatch();
  const { search, page } = props;

  React.useEffect(() => {
    dispatch(getMoviesApi({ search, page }));
  });

  return { movies, loading };
}
