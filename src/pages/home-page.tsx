import * as React from "react";
import useGetMovies from "../api-hooks/movies.query";
import Header from "../components/header/header";
import Home from "../components/modules/home/home";

export const HOME_PAGE_ROUTE = "/";
export function HomePage() {
  const [search, setSearch] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const { loading, movies } = useGetMovies({
    search: search,
    page: page,
  });
  return (
    <>
      <Header setSearch={setSearch} setPage={setPage} />
      <Home movies={movies} loading={loading} page={page} setPage={setPage} />
    </>
  );
}
