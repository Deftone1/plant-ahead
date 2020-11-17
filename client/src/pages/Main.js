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
    <div className="MainPage">
      <Title />


      <div className="row  container-fluid MainPageContainer mx-auto">

        <section className="col-md-2 col-xs-2 leftContentColumn">
          <div className="row d-flex justify-content-center pt-2">
            <div className="card shadow " style={{ width: '15rem' }}>

              <div className="card-body ">
                <img className="card-image rounded img-thumbnail mx-auto d-block" style={{ maxWidth: "50%", maxHeight: "50%" }} src={Plant} />
                <h5 className="card-title text-center">User Name</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bio:</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet lacus, nec scelerisque lorem.</p>
                <button className="btn btn-primary">Sign-Out</button>

              </div>
            </div>

          </div>
          <div className="row getStartedLists d-flex justify-content-center pt-5">
            <div className="card shadow " style={{ width: '15rem' }}>

              <div className="card-body ">

                <h5 className="card-title text-center">Get Started</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gardens</h6>
                <ul className="list-group clearfix"  >
                  <li className="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>

              </div>
            </div>

          </div>

        </section>
        <section className="col">

          <section className="row mainSection">Main goes here</section>
          <section className="row imageRow">Images goes here</section>
          <section className="row detailRow">Detail goes here</section>

        </section>

      </div>
      <footer>Footer Will go here</footer>

    </div>
  );
}

export default Main;