import React from "react";
import "./styles.css";
import ContentLoader from "react-content-loader";
import { Loader, Loader01, Loader02, Loader03 } from "./Loader";
import Animate from "./Animate";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex"
};

export default function App() {
  return (
    <div className="App">
      <div style={styles}>
        <Animate>
          <Loader01 />
        </Animate>
        <Animate>
          <Loader02 />
        </Animate>
        <Animate>
          <Loader03 />
        </Animate>
      </div>
    </div>
  );
}
