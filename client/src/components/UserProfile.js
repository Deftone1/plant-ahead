import React from "react";
import Plant from "../images/Plant.png";
function UserProfile(props) {

    return (


        <div className="row d-flex justify-content-center pt-2">
            <div className="card shadow" style={{ width: '50rem' }}>
                <div className="card-body">
                    <img className="card-image rounded img-thumbnail mx-auto d-block" alt="Profile" style={{ maxWidth: "50%", maxHeight: "50%" }} src={Plant} />
                    <h5 className="card-title text-center user-profile">{props.user.username}</h5>
                    <h6 className="card-subtitle mb-2 text-muted user-profile">Bio:</h6>
                    <p className="card-text user-profile">I love the outdoors and nature. I currently live in California and enjoy landscaping in my spare time.</p>
                    

                </div>
            </div>

        </div>
    )

};

export default UserProfile;