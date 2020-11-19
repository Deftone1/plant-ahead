import React from "react";

import Dropdown from 'react-bootstrap/Dropdown'


function SavedPlants(props) {
  const { plants } = props;
  const plantList = plants
    .map((plant) => (

      <div >

        <p className="card-text garden-text">{plant.name} <br></br></p>
        <div className="d-flex justify-content-center">
          <Dropdown>
            <Dropdown.Toggle className="btn btn-primary btn-sm" id={plant._id}>
              Add to Project

          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Garden1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Garden2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Garden3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


          <a href="#" className="btn btn-outline-danger btn-sm" id={plant._id} onClick={() => props.removeplant(plant._id)}>Remove Plant</a>

        </div>



      </div>


    ))


  console.log(plants);

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