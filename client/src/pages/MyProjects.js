import React from "react";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import "../styles/my-projects.css";
import API from "../util/API";
import Tree from "../images/Tree.svg";
import plantMain from "../images/plant-welcome.png";

function MyProjects() {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   API.getPublicExample().then((response) => {
  //     setData(response.data);
  //   });
  // }, []);

  return (
    <div className="MyProjects">
      <Title />
      <header>
        <h1>
          Plan<img src={Tree} alt="Tree"></img> Ahead
        </h1>
      </header>

      {/* garden cards here */}
    </div>
  );
}
export default MyProjects;
