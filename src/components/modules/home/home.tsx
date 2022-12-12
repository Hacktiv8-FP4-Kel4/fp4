import * as React from "react";
import useGetMovies from "../../../api-hooks/movies.query";
import { css } from "../../../styles/style";
import Container from "../../elements/container";
import Header from "../../header/header";

interface Props {}

export const HOME_PAGE_ROUTE = "/";
export default function Home(props: Props) {
  const [search, setSearch] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const { loading, movies } = useGetMovies({
    search: search,
    page: page,
  });

  return (
    <>
      <Header setSearch={setSearch} />
      <Container>
        <div className={styles.container()}></div>
      </Container>
    </>
  );
}
const styles = {
  container: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  }),
  titleStyle: css({
    width: "100%",
    marginBottom: 20,
  }),
};
