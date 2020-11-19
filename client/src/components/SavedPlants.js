import React from "react";

function SavedPlants(props) {

  return (
    <div className="col-sm-6">
    <div className="card">
      <div className="card-body shadow">
        <h5 className="card-title">SAVED PLANTS</h5>
        <p className="card-text">Cactus <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
        <p className="card-text">Rose Bush <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
        <p className="card-text">Rubber Plant <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
        <p className="card-text">Venus Fly Trap <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
        <a href="#" className="btn btn-primary">Clear Saved Plants</a>
      </div>
    </div>
  </div>


  )
};

export default SavedPlants;