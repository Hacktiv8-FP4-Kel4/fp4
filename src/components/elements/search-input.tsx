import * as React from "react";
import { css } from "../../styles/style";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  placeholder?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  type?: string;
}

export default function SearchInput(props: Props) {
  const { placeholder = "", setSearch, type = "text", setPage } = props;
  const handleChange = useDebouncedCallback((event: any) => {
    setPage(1);
    setSearch(event.target.value);
  }, 800);

  return (
    <input
      type={type}
      className={styles.container()}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

const styles = {
  container: css({
    fontSize: "$body5",
    fontFamily: "Nunito",
    padding: "8px 16px 8px 16px",
    alignItems: "center",
    height: "70%",
    borderRadius: 8,
    border: "none",
  }),
};
