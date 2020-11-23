import React from "react";
import Plant from "../images/Plant.png";
import Modal from "react-bootstrap/Modal";
import API from "../util/API"
import { useState, useEffect } from "react";
function UserProfile(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [profiletext, setprofiletext] = useState(null);
    console.log(props.user)
    useEffect(() => {
      // example API call
      API.getProtectedExample().then((response) => {
        setprofiletext(response.data.profile);
        console.log(response.data.profile)
      });
    }, []);
    const showModal = () => {
        setIsOpen(true);
      };
      const hideModal = () => {
        setIsOpen(false);
        // use this to set bullet point lists for plants
      };
      const handlemodalsubmit = event =>{
       let update={_id:props.user.id, profile:profiletext};
        API.profilechange(update)
      }

      const handlemodalnotechange = event =>{ 
        setprofiletext(event.target.value)
      }
    return (


        <div className="row d-flex justify-content-center pt-2">
            <div className="card shadow" style={{ width: '50rem' }}>
                <div className="card-body">
                    <img className="card-image rounded img-thumbnail mx-auto d-block" alt="Profile" style={{ maxWidth: "50%", maxHeight: "50%" }} src={Plant} />
                    <h5 className="card-title text-center user-profile">{props.user.username}</h5>
                    <h6 className="card-subtitle mb-2 text-muted user-profile">Bio: <span role="img" aria-label="Memo" style={{ cursor: "pointer" }} onClick={()=>showModal()}>📝</span></h6> <br></br>
                    <p className="card-text user-profile">{profiletext}</p>
                    <Modal  show={isOpen} onHide={hideModal} >
            <Modal.Header >
              <Modal.Title>{props.user.username}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <form>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Profile:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" 
                  rows="3" 
                  value={profiletext}
                   onChange={handlemodalnotechange}></textarea>
                </div>
                <button onClick={handlemodalsubmit}> save </button>

              </form>
      
            </Modal.Body>
            <Modal.Footer>
              <button className=" btn btn-danger" onClick={hideModal}>Exit</button>
            </Modal.Footer>
          </Modal>

                </div>
            </div>

        </div>
    )

};

export default UserProfile;