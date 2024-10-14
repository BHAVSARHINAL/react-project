// import React from "react";
import styles from "./myStyle.module.css";
function Tutorial() {
  //inline css

  const myStyle = {
    color: "blue",
    backgroundColor: "pink",
  };
  // return <div style={{ color: "blue" }}>hello</div>;
  return (
    <div style={myStyle}>
      hello
      <p className={styles.container}>hiii guys...</p>
    </div>
  );
}

export default Tutorial;
