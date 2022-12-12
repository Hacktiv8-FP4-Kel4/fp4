import * as React from "react";
import { Movie, Movies } from "../../api-hooks/movies.model";
import { css } from "../../styles/style";
import Card from "./card";
interface Props {
  movies?: Movies;
}

export default function CardList(props: Props) {
  const { movies } = props;
  return (
    <div className={styles.cardContainer()}>
      {movies?.Search.map((movie: Movie) => (
        <div className={styles.cardSpace()}>
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  cardSpace: css({
    paddingLeft: 20,
    paddingRight: 20,
    width: "20%",
    marginBottom: 50,
  }),
  cardContainer: css({
    flexDirection: "row",
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
  }),
};
