import React from "react";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import "../styles/my-projects.css";
import API from "../util/API";
import GardenCard from "../components/GardenCard";
import SavedPlants from "../components/SavedPlants";
import Tree from "../images/Tree.svg";
import leaves from "../images/leaves.png";


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
      <br></br>

      <div className="row">
  <GardenCard />
  <SavedPlants />
</div>
<div><img
        className="plantImageTwo"
        src={leaves}
        alt="plant-ahead-welcome"
      ></img></div>
    </div>
  );
}
export default MyProjects;
