import React from "react";
import Lottie from "lottie-react";
import Empty from "../../assets/empty.json";
import Text from "./text";
import { css } from "../../styles/style";

function EmptyComponent() {
  return <Lottie animationData={Empty} loop={true} style={{ width: "80%" }} />;
}

interface Props {
  title?: string;
}

export default function EmptyView(props: Props) {
  const { title } = props;
  let errors;
  if (title === "Too many results.") {
    errors = "seems the keyword is too common, try another keyword";
  } else {
    errors = "seems there is empty, try another keyword";
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <EmptyComponent />
        <Text className={styles.description()}>{`Uh oh, ${errors}`}</Text>
      </div>
    </div>
  );
}

const styles = {
  title: css({
    fontSize: 30,
    fontWeight: "$semiBold",
  }),
  description: css({
    fontSize: "$body2",
    fontWeight: "$regular",
    marginBottom: 40,
  }),
};
