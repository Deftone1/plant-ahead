import React from "react";
import Modal from "react-bootstrap/Modal";

function GardenModal(props) {
    const {hideModal, isOpen, title, currentgarden, currentid, removeplantfromgarden} = props;
   
    const plantsingarden = currentgarden.map(plantingarden =>(
        <div key={plantingarden._id} className="d-flex justify-content-between border">
        <li className="list-group-item">{plantingarden.name} </li>
        <button className=" btn btn-danger" data-gardenid= {currentid} onClick={() => removeplantfromgarden(currentid, plantingarden._id)}>✗</button>
   </div>
    ))
   
    return (
        <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            {/* second Header with Plant name */}

            <Modal.Body>
                <h5>Here are the current plants in your garden:</h5>
                <ul className="list-group">
                {plantsingarden}  
                </ul>

            </Modal.Body>
            <Modal.Footer>
                <button className=" btn2 btn-danger" onClick={hideModal}>Exit</button>
            </Modal.Footer>
        </Modal>


    )
};


export default GardenModal;