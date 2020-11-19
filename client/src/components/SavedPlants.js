import React from "react";

function SavedPlants(props) {

  return (
    <div className="col-sm-6">
    <div className="card garden-card">
      <div className="card-body shadow garden-body">
        <h5 className="card-title garden-title">SAVED PLANTS</h5>
        <p className="card-text garden-text">Cactus <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
        <p className="card-text garden-text">Rose Bush <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
        <p className="card-text garden-text">Rubber Plant <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
        <p className="card-text garden-text">Venus Fly Trap <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
        <a href="#" className="btn btn-primary">Clear Saved Plants</a>
      </div>
    </div>
  </div>


  )
};

export default SavedPlants;