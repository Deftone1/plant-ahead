import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import GardenModal from "../components/GardenModal";
import { useState } from "react";

function GardenCard(props) {
  const gardens =props.gardens;
 

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");


  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    // use this to set bullet point lists for plants 
    setTitle("");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  const gardenlist= gardens
  .map((garden)=>(
    <div className="border d-flex justify-content-between">
    <button className=" btn btn-outline-success" onClick={showModal}>{garden.name}</button>
    <button className=" btn btn-outline-primary" onClick={hideModal}>Edit</button> 
  </div>
  ))
  return (
    <div className="col-sm-6">
      <div className="card garden-card">
        <div className="card-body shadow garden-body">
          <h5 className="card-title garden-title">MY PROJECTS</h5>
          

          {/* <!-- Button trigger modal --> */}
         
          {gardenlist}
          
          
           <GardenModal 
          hideModal={hideModal}
          isOpen={isOpen}
          modalLoaded={modalLoaded}
          title={title}
          /> 

        <button className="btn btn-primary">Clear Projects</button>
        </div>
        
      </div>
    </div>

  )
};
export default GardenCard;


