import React from "react";
import Plant from "../images/Plant.png"
function UserExperienceCard(props) {

    return (

        <div className="col-md-8 card mt-4">
            <div className=" row d-flex mt-2 ">
                <div className=" col-md-11 card shadow mx-auto" >

                    <div className="card-body ">

                        <h5 className="card-title text-center">View what user {"[userName goes here]"} has to say about this plant</h5>
                        <h6 className="card-subtitle mb-2 text-muted pt-3">Plant Name:{"[Name of Plant Name goes here]"}</h6>


                    </div>
                </div>


            </div>
            {/* User Experience Goes here */}
            <div className=" d-flex justify-content-center   ">
                <div className="card shadow col-md-11 mt-2" style={{ width: '50rem' }}>
                    <div className="pl-4 pt-4">
                        <h5 className="card-title text-center">User-Experience</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Plant: {"[Plant Name Goes Here]"}</h6>
                    </div>


                    <div className="card-body row no-gutters" >


                        {/* card for user experience results go here */}
                        <div className="card-body border col" style={{ width: '30rem' }}>

                            <h6 className="card-title text-center">From: {"[UserName Goes here]"}</h6><hr />
                            <p>
                                {`[Nullam tortor ipsum, rutrum ut sodales ac, luctus sed metus. Donec porta consectetur eleifend. 
                                Suspendisse semper erat odio, non luctus ipsum consectetur id. Aliquam ut pellentesque eros. 
                                Aliquam odio nisi, accumsan et risus ac, consectetur pellentesque dolor. Donec in vulputate massa. 
                                Cras dapibus, risus nec volutpat mattis, mauris mi euismod justo, in suscipit odio est non lorem. 
                                Aliquam pretium mauris sit amet sapien malesuada, sed sodales ipsum feugiat]`}
                            </p>


                        </div>
                        <div className="col">
                            <img src={Plant} className="card-img fluid-img img-thumbnail" alt="Plant" style={{ width: "200px", objectFit: "contain" }} />

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )

};

export default UserExperienceCard;