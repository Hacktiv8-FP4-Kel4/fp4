import { Movie } from "../../api-hooks/movies.model";
import { css } from "../../styles/style";

interface Props {
  movie: Movie;
}
export default function Card(props: Props) {
  const { movie } = props;
  return (
    <div className={styles.cardContainer()}>
      <div className={styles.columnFlex()}>
        <img src={movie.Poster} className={styles.imageStyle()} alt="movie" />
        <div style={{ marginTop: 10 }} className={styles.titleStyle()}>
          {movie.Title}
        </div>
      </div>
    </div>
  );
}

const styles = {
  cardContainer: css({
    padding: "4px 4px 4px 4px",
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    borderRadius: 8,
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    },
    cursor: "pointer",
  }),
  columnFlex: css({
    flexDirection: "column",
    display: "flex",
  }),
  imageStyle: css({
    flex: 1,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 8,
    borderWidth: "1px solid black",
    aspectRatio: 16 / 20,
  }),
  titleStyle: css({
    color: "$primary2",
    fontSize: "$body4",
    fontWeight: "$semiBold",
    textAlign: "center",
    alignSelf: "center",
    paddingBottom: 10,
  }),
};
