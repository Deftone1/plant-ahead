import React from "react";
import Cactus from "../images/cactus.png";
function UserExperienceCard(props) {
  return (
    <div className="col-md-8 card mt-4">
      <div className=" row d-flex mt-2 ">
       
      </div>
      {/* User Experience Goes here */}
      <div className=" d-flex justify-content-center   ">
        <div className="card shadow col-md-11 mt-2" style={{ width: "50rem" }}>
          <div className="pl-4 pt-4">
            
            <h4 className="card-subtitle mb-2 text-muted">
              Plant: Desert Cactus
            </h4>
          </div>

          <div className="card-body row no-gutters">
            {/* card for user experience results go here */}
            <div className="card-body border col" style={{ width: "30rem" }}>
              <h6 className="card-title text-center">
                Review By: {"CactusLover25"}
              </h6>
              <hr />
              <p className="p-3">
                {`Their ability to survive in extremely hot, arid, harsh habitat is a truly fantastic attribute of cacti. However the notion that cacti do not need water or that they actually must avoid water in order to survive is unquestionably false. The reality is water is essential for all cacti to live. Their reputation comes from their ability to survive in areas where water is available in small amounts or is delivered infrequently. Most desert cacti can sustain long periods of drought. This is because the last time water was available to them, they stored as much as possible in their tissues. Additionally cacti contain many features that enable them to keep that moisture and not dry up in the heat of their environment.`}
              </p>
            </div>
            <div className="col">
              <img
                src={Cactus}
                className="card-img fluid-img img-thumbnail"
                alt="Plant"
                style={{ width: "200px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserExperienceCard;
