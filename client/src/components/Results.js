import React from "react";
import "../styles/Results.css";
import Plant from "../images/Plant.png";
import PlantGrow from "../images/plantgrow.png";

// changed this to a function not a variable
function Results(props) {
  //  deconstructing props here and defining trees
  const { trees } = props;

  const plantList = trees.map((tree) => (
    <div className="col mb-4 results" key={tree.key}>
      <div className="card">
        {/* If there is no image use place holder */}

        {!tree.image_url && (
          <img
            src={Plant}
            className="card-img-top mx-auto border rounded img-thumbnail img-fluid mt-2"
            style={{ width: "200px", maxHeight: "200px", objectFit: "contain" }}
            alt={tree.name}
          />
        )}

        {tree.image_url && (
          <img
            src={tree.image_url}
            className="card-img-top mx-auto border rounded img-thumbnail img-fluid mt-2"
            style={{ width: "250px", maxHeight: "200px", objectFit: "cover" }}
            alt={tree.name}
          />
        )}

        <div className="card-body mx-auto">
          <div className="row">
            <div className="col">
              <h5 className="card-title">{tree.name}</h5>
              <p className="card-text">{tree.family}</p>
              <p className="card-text">{tree.genus}</p>
            </div>
            <div className="col">
              <button
                className="addPlanToList btn-primary add-to-list"
                style={{ fontSize: "15px" }}
                id={tree.id}
                onClick={(event) => props.handleSavedButton(event)}
              >
                Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return trees.length === 0 ? (
    <div className="col-md-10 mx-auto mt-4">
      <img src={PlantGrow} alt="main screen growing plant" className="plantgrow"/>
    </div>
  ) : (
    <div className="col-md-11 mx-auto border shadow results-box search mt-4">
      <div className="row">
        <div className="col">
          <h3 className="searchTitle search-results">Search Results:</h3>
        </div>

        {/* return card collection here */}
        <div className="row row-cols-1 row-cols-md-3 searchResultImages pl-3">
          {plantList}
        </div>
      </div>
    </div>
  );
}
export default Results;
