import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import API from "../util/API"

function SavedPlants(props) {
  const { plants, gardens, addplanttogarden, deleteallplants, user, loadplants } = props;
  // const for modal ====================================
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentplant, setcurrentplant]=useState(
    {_id: "", 
    name: "",
     image_url: "",
      genus: "", 
      user_id: "", 
      notes:""
    }
  )


  // =======================================================
  const showModal = () => {
    setIsOpen(true);
  };

  // const modalLoaded = (plantName) => {
    
  //   setTitle(plantName);
  // };
  const noteModalClick = (plant) => {
    setcurrentplant({})
    showModal();
    setcurrentplant(plant)
    console.log(currentplant)

   // modalLoaded(plant.name);
  };


 

  const plantList = plants.map((plant, index) => (
    <div key={index}>
      <p className="card-text garden-text">
      {plant.name} <span role="img" aria-label="Memo" style={{ cursor: "pointer" }} onClick={()=>noteModalClick(plant)}>📝</span><br></br>
      </p>
      
      <div className="d-flex justify-content-center">
        <Dropdown>
          <Dropdown.Toggle className="btn1 btn-success btn-sm" id={plant._id}>
            Add to Project
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {gardens.map((garden, index) => (
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
          
          className="btn2 btn-outline-danger btn-sm"
          id={plant._id}
          onClick={() => props.removeplant(plant._id)}
        >Remove Plant</button>

      </div>
    </div>
  ));




  // ===========================Modal functions============================================
  

  const hideModal = () => {
    setIsOpen(false);
    // use this to set bullet point lists for plants
    setTitle("");
  };
  const handlemodalnotechange = event =>{
    event.preventDefault()
    setcurrentplant(currentplant => ({...currentplant, notes: event.target.value}))
    console.log(currentplant)
  }
  
  const handlemodalsubmit = event =>{
    event.preventDefault()
    console.log("submit")
    API.addtonote(currentplant._id, currentplant)
    loadplants(user.id)
  }

  

  // ====================================================================================

  return (
    <div className="col-sm-6">
      <div className="card garden-card">
        <div className="card-body shadow garden-body">
          <h5 className="card-title garden-title">Saved Plants</h5>
          {plantList}

          <Modal  show={isOpen} onHide={hideModal} >
            <Modal.Header >
              <Modal.Title>{currentplant.name}</Modal.Title>
            </Modal.Header>
              <img className="img-thumbnail mx-auto mt-3" src={currentplant.image_url} style={{ width: "250px", maxHeight: "200px", objectFit: "cover" }} />

            <Modal.Body>
              <div>
                <h3>{currentplant.genus}</h3>
                <h3>{currentplant.family}</h3>
              </div>
              <form>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Note:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={currentplant.notes} onChange={handlemodalnotechange}></textarea>
                </div>
                <button onClick={handlemodalsubmit}> save </button>

              </form>
      
            </Modal.Body>
            <Modal.Footer>
              <button className=" btn btn-danger" onClick={hideModal}>Exit</button>
            </Modal.Footer>
          </Modal>

          <br></br><button className="btn1 btn-outline-primary btn-sm" onClick={() => deleteallplants(user.id)}>Clear Saved Plants</button>
        </div>
      </div>
    </div>
  )
}
export default SavedPlants;
