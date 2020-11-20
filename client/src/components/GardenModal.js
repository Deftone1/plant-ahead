import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import API from "../util/API"
// working on this one

function GardenModal(props) {
    const {hideModal, isOpen, modalLoaded, title, currentgarden, currentid, removeplantfromgarden} = props;
    console.log(currentgarden)
    const plantsingarden = currentgarden.map(plantingarden =>(
        <div className="d-flex justify-content-between border">
        <li className="list-group-item">{plantingarden.name} </li>
        <button className=" btn btn-danger" data-gardenid= {currentid} onClick={() => removeplantfromgarden(currentid, plantingarden._id)}>✗</button>
   </div>
    ))
   /* ( currentgarden.length === 0) ? (
        <div></div>
    ) : */
    return (
        <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            {/* second Header with Plant name */}

            <Modal.Body>
                <h5>Here are your current plants in your garden:</h5>
                <ul className="list-group">
                {plantsingarden}  
                </ul>

            </Modal.Body>
            <Modal.Footer>
                <button className=" btn btn-danger" onClick={hideModal}>Exit</button>
            </Modal.Footer>
        </Modal>


    )
};


export default GardenModal;