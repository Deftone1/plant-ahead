import React from "react";
import Tree from "../images/Tree.svg";
import "../styles/community.css";
function JoinCommunityTitle(props) {

    return (
        <div className="row container mx-auto card shadow mt-3 text-center rounded">

            <div className="card-body col-md-12 col-sm-3 d-flex justify-content-between align-items-center">
                <span><img src={Tree} alt="Tree" /></span>
                <div >
                    <h3 className="community-welcome">Join our Community</h3>
                    <p>Tips and ideas to make your project come to life.</p>
                </div>

                <span><img src={Tree} alt="Tree" /></span>
            </div>

        </div>


    )

};

export default JoinCommunityTitle;