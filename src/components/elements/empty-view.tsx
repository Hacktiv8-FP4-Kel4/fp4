import React from "react";
import Lottie from "lottie-react";
import Empty from "../../assets/empty.json";
import Text from "./text";
import { css } from "../../styles/style";

function EmptyComponent() {
  return <Lottie animationData={Empty} loop={true} style={{ width: "80%" }} />;
}

export default function EmptyView() {
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
        <Text className={styles.description()}>
          {`Uh oh, seems there is empty, try another keyword`}
        </Text>
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
