import React from "react";

function SearchForm(props) {
  return (
    <section className="row mainSection d-flex  justify-content-center align-items-center mt-3">
      <div className="col-md-4 col-xs-2 border pr-5 pl-5 pt-2 shadow rounded search">
        <h4 className="text-center">
          Search For Your Plant Below:
          <br />
        </h4>
        <br />
        <form>
          
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a plant"
              value={props.searchPlant}
              onChange={props.handleInputChange}
            />
            <button
              type="submit"
              className="btn1 btn-primary ml-4"
              onClick={props.handleFormSubmit}
            >
              Submit
            </button>
          </div>
          <div className="form-check form-check-inline pb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="commonName"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Common-Name
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="edible"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Edible
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="height"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Height
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="species"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Species
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
