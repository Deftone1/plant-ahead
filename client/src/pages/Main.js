import React from "react";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import "../styles/Main.css"
import Plant from "../images/Plant.png"

import API from "../util/API";

function Main() {
  const { logout, user } = useAuth();



  return (
    <div className="MainPage mb-5">
      <Title />

      {/* Page container holds everything */}
      <div className="row  container-fluid MainPageContainer mx-auto">

        <section className="col-md-2 col-xs-2 leftContentColumn">
          {/* div holding user profile and garden list starts here */}
          <div className="row d-flex justify-content-center pt-2">
            <div className="card shadow " style={{ width: '15rem' }}>
              {/* Profile */}
              <div className="card-body ">
                <img className="card-image rounded img-thumbnail mx-auto d-block" style={{ maxWidth: "50%", maxHeight: "50%" }} src={Plant} />
                <h5 className="card-title text-center">User Name</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bio:</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet lacus, nec scelerisque lorem.</p>
                <button className="btn btn-primary">Sign-Out</button>

              </div>
            </div>

          </div>
          <div className="row getStartedLists d-flex justify-content-center pt-5 pb-5">
            <div className="card shadow " style={{ width: '15rem' }}>

              <div className="card-body ">

                <h5 className="card-title text-center">Get Started</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gardens</h6>
                <ul className="list-group clearfix"  >
                  <li className="list-group-item disabled" aria-disabled="true">Fly-Trap Garden</li>
                  <li className="list-group-item">Vegetable-Garden</li>
                  <li className="list-group-item">Rose-Garden</li>
                  <li className="list-group-item">Cactus-Garden</li>
                  <li className="list-group-item">Succubus-Garden</li>
                </ul>

              </div>
            </div>
            

          </div>

        </section>
        {/* Right hand-side content  */}
        <section className="col ">
          {/* Main section starts here */}
          <section className="row mainSection d-flex  justify-content-center align-items-center">
            <div className="col-md-4 col-xs-2 border pr-5 pl-5 pt-2 shadow"  >
              <h4 className="text-center">Search For Your Plant Below<br />
              Filer By:</h4><br />
              {/* Checklist goes here */}

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
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                  <button type="submit" className="btn btn-primary ml-4">Submit</button>
                </div>

              </form>
            </div>
          </section>
          {/* Image section starts here */}
          <section className="row imageRow ">

            <div className="col-md-6 mx-auto d-flex  justify-content-center align-items-center border shadow">
              <div className="shadow card ">
                <img src={Plant} className=" border rounded  img-thumbnail img-fluid " alt="Baby-Plant" />
                {/* Find a unique way to add this, maybe a card flip? */}
                {/* <div className="card-img-overlay">
                  <h5>Common Name</h5>
                  <p>Scientific Name</p>
                  <p>Scientific Name</p>
                </div> */}
              </div>

              <div className="ml-5 mr-5 shadow">
                <img src={Plant} className=" border rounded  img-thumbnail img-fluid" alt="Baby-Plant" />
              </div>

              <div className="shadow">
                <img src={Plant} className=" border rounded  img-thumbnail img-fluid" alt="Baby-Plant" />
              </div>
            </div>

          </section>
          {/* Details Section */}
          <section className="row detailRow ">

            <div className="col ">
              <div className="card shadow mx-auto mt-4" >
                {/* Profile */}
                <div className="card-body ">
                  <h5>How To grow</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec sagittis nunc. Ut in massa a eros porta fringilla. Praesent ante urna, euismod ut viverra sed, viverra at eros.
                  Aliquam pulvinar ex sed sapien blandit efficitur. Duis aliquam lacus vulputate, aliquam elit sit amet, dignissim magna. Vivamus rhoncus mattis purus, vitae lacinia ipsum commodo nec. Quisque ut commodo ante.
                  Proin quis tellus turpis. Ut posuere mauris ac lectus fringilla consectetur. Sed et dolor venenatis, aliquet purus varius, iaculis ante. Ut egestas mi quis purus volutpat dictum. Nulla vulputate tristique quam.
                  </p>

                </div>
              </div>

            </div>
          </section>

      
        </section>
        
      </div>
      <footer className="bg-dark fixed-bottom col-lg-12 text-center">
      <h1>Footer Goes here</h1>

      </footer>

    </div>
  );
}

export default Main;