import React from "react";

function FindUserInputResults(props) {

    return (

        <div className="col-md-3 col-xs-5 pt-2  m-4">
            <div className=" d-flex justify-content-center   ">
                <div className="card shadow " style={{ width: '25rem' }}>

                    <div className="card-body ">

                        <h5 className="card-title text-center">Browse User Experience Reviews</h5>
                        
                        <ul className="list-group ml-0 "  >

                            <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                <h6>Rose</h6>
                                <button type="button" className=" btn2 btn-primary d-flex justify-content-between " style={{ fontSize: "15px" }}>LeslieJacobs2</button>
                            </li>
                            <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                <h6>Fly-Trap </h6>
                                <button type="button" className=" btn2 btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>PeteL1975</button>
                            </li>
                            <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                <h6>Peas</h6>
                                <button type="button" className=" btn2 btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>LindaJohnson</button>
                            </li>
                            <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                <h6>Cactus</h6>
                                <button type="button" className=" btn2 btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>NatureMan50</button>
                            </li>
                            <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                <h6>Succulent</h6>
                                <button type="button" className=" btn2 btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>TreeClimber</button>
                            </li>


                        </ul>

                    </div>
                </div>


            </div>
        </div>
    )

};

export default FindUserInputResults;