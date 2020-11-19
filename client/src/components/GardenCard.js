import React from "react";

function GardenCard(props) {

    return (
        <div className="col-sm-6">
    <div className="card garden-card">
      <div className="card-body shadow garden-body">
        <h5 className="card-title garden-title">MY PROJECTS</h5>
        <p className="card-text garden-text">Garden #1</p>
        <p className="card-text garden-text">Garden #2</p>
        <p className="card-text garden-text">Garden #3</p>
        <p className="card-text garden-text">Garden #4</p>
        <a href="#" className="btn btn-primary">Clear Projects</a>
      </div>
    </div>
  </div>

    )
    };
    export default GardenCard;