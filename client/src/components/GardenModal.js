import React from "react";
import Modal from "react-bootstrap/Modal";

function GardenModal(props) {
    const {hideModal, isOpen, modalLoaded, title} = props;
      
    return (
        <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            {/* second Header with Plant name */}

            <Modal.Body>
                <h5>Here are your current plants in your garden:</h5>
                <ul className="list-group">
                    <div className="d-flex justify-content-between border">
                        <li className="list-group-item">Cras justo odio </li>
                        <button className=" btn btn-danger" onClick={hideModal}>✗</button>
                    </div>
                    <div className="d-flex justify-content-between border">
                        <li className="list-group-item">Cras justo odio </li>
                        <button className=" btn btn-danger" onClick={hideModal}>✗</button>
                    </div>
                    <div className="d-flex justify-content-between border">
                        <li className="list-group-item">Cras justo odio </li>
                        <button className=" btn btn-danger" onClick={hideModal}>✗</button>
                    </div>
                    <div className="d-flex justify-content-between border">
                        <li className="list-group-item">Cras justo odio </li>
                        <button className=" btn btn-danger" onClick={hideModal}>✗</button>
                    </div>
                </ul>

            </Modal.Body>
            <Modal.Footer>
                <button className=" btn btn-danger" onClick={hideModal}>Exit</button>
            </Modal.Footer>
        </Modal>


    )
};


export default GardenModal;