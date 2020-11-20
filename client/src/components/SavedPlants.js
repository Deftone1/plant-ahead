import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function SavedPlants(props) {
  const { plants, gardens, addplanttogarden, deleteallplants,user } = props;
  

  const plantList = plants.map((plant, index) => (
    <div key={index}>
      <p className="card-text garden-text">
        {plant.name} <br></br>
      </p>
      <div className="d-flex justify-content-center">
        <Dropdown>
          <Dropdown.Toggle className="btn1 btn-success btn-sm" id={plant._id}>
            Add to Project
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {gardens.map((garden,index) => (
              <Dropdown.Item
                href="#/action-1"
                key={index}
                onClick={() => addplanttogarden(garden._id, plant._id)}
              >
                {garden.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <button
          
          className="btn2 btn-sm"
          id={plant._id}
          onClick={() => props.removeplant(plant._id)}
        >Remove Plant</button>
       
      </div>
    </div>
  ));

  

  return (
    <div className="col-sm-6">
      <div className="card garden-card">
        <div className="card-body shadow garden-body">
          <h5 className="card-title garden-title">Saved Plants</h5>
          {plantList}

          <br></br><button className="btn1 btn-outline-primary btn-sm" onClick={()=>deleteallplants(user.id)}>Clear Saved Plants</button>
        </div>
      </div>
    </div>
)
}
export default SavedPlants;
