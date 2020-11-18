import React from "react";

function SearchForm(props){

return(
<form >
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" id="commonName" value="option1" />
      <label className="form-check-label" htmlFor="inlineCheckbox1">Common-Name</label>
    </div>
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" id="edible" value="option2" />
      <label className="form-check-label" htmlFor="inlineCheckbox2">Edible</label>
    </div>
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" id="height" value="option2" />
      <label className="form-check-label" htmlFor="inlineCheckbox2">Height</label>
    </div>
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" id="species" value="option2" />
      <label className="form-check-label" htmlFor="inlineCheckbox2">Species</label>
    </div>
    <div className="form-group d-flex   ">
      <input type="text" 
      className="form-control" 
      placeholder="Search for a plant"
      onChange={props.handleInputChange}
       />
      <button type="submit"
       className="btn btn-primary ml-4"
       onClick={props.handleFormSubmit}
       >Submit</button>
    </div>

</form>)



}


export default SearchForm