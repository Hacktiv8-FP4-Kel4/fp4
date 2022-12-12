import React from "react";
import Lottie from "lottie-react";
import Loading from "../../assets/loading.json";
import { css } from "../../styles/style";

function LoadingComponent() {
  return (
    <Lottie animationData={Loading} loop={true} style={{ width: "80%" }} />
  );
}

export default function LoadingView() {
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
        <LoadingComponent />
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
