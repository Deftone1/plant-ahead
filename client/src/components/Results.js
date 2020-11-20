import React from "react"
import "../styles/Results.css";
import { useEffect, useState } from "react";

// changed this to a function not a variable
function Results(props) {

    //  deconstructing props here and defining trees
    const { trees } = props;
    


    const plantList = trees
        .map((tree) => (

            <div className="col mb-4 " key={tree.key} >
                <div className="card">
                    <img src={tree.image_url} className="card-img-top mx-auto border rounded img-thumbnail img-fluid" style={{ width: "250px", maxHeight: "200px", objectFit: "cover" }} alt={tree.name} />
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title">{tree.name}</h5>
                                <p className="card-text">{tree.family}</p>
                                <p className="card-text">{tree.genus}</p>
                            </div>
                            <div className="col">
                                <button className="addPlanToList btn-primary add-to-list" style={{ fontSize: "15px" }} id={tree.id} onClick={(event) => props.handleSavedButton(event)}>Add to List</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        ));

    return (
        <div className="col-md-11 mx-auto border shadow results-box" >
            <div className="row">
                <div className="col">
                    <h3 className="searchTitle">Search Results:</h3>
                </div>

                {/* return card collection here */}
                <div className="row row-cols-1 row-cols-md-3 searchResultImages">
                    {plantList}

                </div>
               
            </div>
        </div>

    )

};
export default Results


