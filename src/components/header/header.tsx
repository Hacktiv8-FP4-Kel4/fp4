import * as React from "react";
import { css, theme } from "../../styles/style";
import { Link } from "react-router-dom";
import SearchInput from "../elements/search-input";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Header(props: Props) {
  const { setSearch } = props;

  return (
    <div className={styles.navContainer()}>
      <div className={styles.navItemContainer()}>
        <div className={styles.boldText()}>{"List Movies"}</div>
      </div>
      <div className={styles.flexRow()}>
        <SearchInput placeholder={"Search..."} setSearch={setSearch} />
      </div>
    </div>
  );
}

const styles = {
  boldText: css({
    fontWeight: "bold",
    fontSize: "$body1",
  }),
  navContainer: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    color: "$white0",
    backgroundColor: "$primary0",
    fontSize: "$body5",
    height: 60,
    position: "sticky",
    top: 0,
    zIndex: 1100,
  }),
  navItemContainer: css({
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  }),
  navItemStyle: css({
    color: "$white1",
    cursor: "pointer",
    marginLeft: 24,
  }),
  ml10: css({
    marginLeft: 10,
  }),
  flexRow: css({
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  }),
};

export default Header;
