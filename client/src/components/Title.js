import React from "react";
// import "../styles/Title.css";
import Tree from "../images/Tree.svg";

function Title() {
  return (
    <div >
      <header className="d-flex justify-content-center align-items-baseline">
      <h1>Plan</h1>
      <img src={Tree} alt="Tree"></img>
      <h1>Ahead</h1>

      </header>
    </div>
  )

};

export default Title;