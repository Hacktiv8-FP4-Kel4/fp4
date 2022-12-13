import { Movies } from "../../../api-hooks/movies.model";
import { css } from "../../../styles/style";
import Button from "../../elements/button";
import CardList from "../../elements/card-list";
import Container from "../../elements/container";
import EmptyView from "../../elements/empty-view";
import LoadingView from "../../elements/loading-view";

interface Props {
  movies?: Movies;
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const HOME_PAGE_ROUTE = "/";
export default function Home(props: Props) {
  const { movies, loading, page, setPage } = props;

  return (
    <>
      <Container>
        <div className={styles.container()}>
          {loading ? (
            <LoadingView />
          ) : !movies?.Search ? (
            <EmptyView title={movies?.Error} />
          ) : (
            <div>
              <CardList movies={movies} />
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {page > 1 && (
                  <Button
                    title="Previous"
                    onSubmit={() => {
                      setPage(page - 1);
                    }}
                    style={{ alignSelf: "center", marginRight: 10 }}
                  />
                )}
                {page * 10 < movies.totalResults && (
                  <Button
                    title="Next"
                    onSubmit={() => {
                      setPage(page + 1);
                    }}
                    style={{ alignSelf: "center" }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
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
