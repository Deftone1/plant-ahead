import React from "react";


function SavedPlants(props) {
  const {plants}=props;
  const plantList = plants
    .map((plant)=> (
      <p className="card-text">{plant.name} <br></br><a href="#" className="btn btn-outline-success btn-sm" id={plant._id}>Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm"id={plant._id}>Remove Plant</a></p>
    ))




  return (
    <div className="col-sm-6">
    <div className="card">
      <div className="card-body shadow">
        <h5 className="card-title">SAVED PLANTS</h5>
        {plantList}
        <a href="#" className="btn btn-primary">Clear Saved Plants</a>
      </div>
    </div>
  </div>


  )
};


{/* <p className="card-text">Cactus <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
<p className="card-text">Rose Bush <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
<p className="card-text">Rubber Plant <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p>
<p className="card-text">Venus Fly Trap <br></br><a href="#" className="btn btn-outline-success btn-sm">Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm">Remove Plant</a></p> */}
export default SavedPlants;