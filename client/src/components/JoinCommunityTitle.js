import React from "react";
import Tree from "../images/Tree.svg";
function JoinCommunityTitle(props) {

    return (
        <div className="row container mx-auto card shadow mt-3 text-center rounded">

            <div className="card-body col-md-12 col-sm-3 d-flex justify-content-between align-items-center">
                <span><img src={Tree} alt="Tree" /></span>
                <div >
                    <h3>Join our Community,</h3>
                    <p>Find Tips and Ideas to Make Your Project Come to Life.</p>
                </div>

                <span><img src={Tree} alt="Tree" /></span>
            </div>

        </div>


    )

};

export default JoinCommunityTitle;