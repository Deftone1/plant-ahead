import React from "react";
// import "../styles/Title.css";

import plantMain from "../images/plant-welcome.png";

function Title() {
  return (
    <div><img
        className="plantImageHeader"
        src={plantMain}
        alt="plant-ahead-welcome"
      ></img></div>
    // <div >
    //   <header className="d-flex justify-content-center align-items-center">
    //   <h1>Plan</h1>
    //   <img src={Tree} alt="Tree"/>
    //   <h1>Ahead</h1>

    //   </header>
    // </div>
  )

};

export default Title;