import React from "react";

function GardenCard(props) {

    return (
        <div className="col-sm-6">
    <div className="card">
      <div className="card-body shadow">
        <h5 className="card-title">MY PROJECTS</h5>
        <p className="card-text">Garden #1</p>
        <p className="card-text">Garden #2</p>
        <p className="card-text">Garden #3</p>
        <p className="card-text">Garden #4</p>
        <a href="#" className="btn btn-primary">Clear Projects</a>
      </div>
    </div>
  </div>

    )
    };
    export default GardenCard;