import React from "react";
import Plant from "../images/Plant.png";
function UserProfile(props) {

    return (


        <div className="row d-flex justify-content-center pt-2">
            <div className="card shadow " style={{ width: '15rem' }}>
                <div className="card-body ">
                    <img className="card-image rounded img-thumbnail mx-auto d-block" style={{ maxWidth: "50%", maxHeight: "50%" }} src={Plant} />
                    <h5 className="card-title text-center">User Name</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Bio:</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet lacus, nec scelerisque lorem.</p>
                    <button className="btn btn-primary">Sign-Out</button>

                </div>
            </div>

        </div>
    )

};

export default UserProfile;