import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import GardenModal from "../components/GardenModal";
import { useState, useEffect} from "react";
import API from "../util/API";
function GardenCard(props) {
  const { gardens, removegarden } = props;
  const [currentgarden, setcurrentgarden] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [currentid, setcurrentid] = useState()

  const gardenmodalclick = (event) => {
    showModal();
    setcurrentgarden([]);
    API.getgardenbyid(event.target.id).then((res) => {
      //let plantsingarden = [];
      modalLoaded(res.data.name)
      setcurrentid(res.data._id)
      for (let i = 0; i < res.data.plants.length; i++) {
        API.getplantbyid(res.data.plants[i]).then((response) => {
          setcurrentgarden(prevgarden=>[...prevgarden, response.data]);
        });
      }
     // return plantsingarden;
   // }).then(plantsingarden =>{ 
     // return setcurrentgarden(plantsingarden)}).then(showModal());
    });
  }
  const showModal = () => {
    setIsOpen(true);
  };

  const getplantname = (plant) => {
    API.getplantbyid(plant).then((res) => {
      return res.data.name;
    });
  };
  

  const hideModal = () => {
    setIsOpen(false);
    // use this to set bullet point lists for plants
    setTitle("");
  };

  const modalLoaded = (name) => {
    setTitle(name);
  };

  const removeplantfromgarden = (garden, plant) =>{
    API.deletePlantfromGarden(garden,plant)
    hideModal()
  }


  const gardenlist = gardens.map((garden) => (
    <div className="border d-flex justify-content-between">
      <button
        className=" btn btn-outline-success"
        id={garden._id}
        onClick={gardenmodalclick}
      >
        {garden.name}
      </button>
      <button className=" btn btn-outline-primary" onClick={hideModal}>
        Edit
      </button>
      <button
        className="btn btn-outline-danger"
        data-id={garden._id}
        onClick={() => removegarden(garden._id)}
      >
        Delete
      </button>
    </div>
  ));



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
            currentgarden={currentgarden}
            currentid={currentid}
            removeplantfromgarden = {removeplantfromgarden}
          />

          <button className="btn btn-primary">Clear Projects</button>
        </div>
      </div>
    </div>
  );
}
export default GardenCard;
