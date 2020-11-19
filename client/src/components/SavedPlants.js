import React from "react";


function SavedPlants(props) {
  const {plants}=props;
  const plantList = plants
    .map((plant)=> (
      <p className="card-text garden-text">{plant.name} <br></br><a href="#" className="btn btn-outline-success btn-sm" id={plant._id}>Add to Project</a><a href="#" className="btn btn-outline-danger btn-sm"id={plant._id} onClick={()=>props.removeplant(plant._id)}>Remove Plant</a></p>
    ))




  return (
    <div className="col-sm-6">
    <div className="card garden-card">
      <div className="card-body shadow garden-body">
        <h5 className="card-title garden-title">SAVED PLANTS</h5>
        {plantList}
        <a href="#" className="btn btn-primary">Clear Saved Plants</a>
      </div>
    </div>
  </div>


  )
};



export default SavedPlants;