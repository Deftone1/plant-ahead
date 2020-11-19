import React from "react";

function GetStartedList(props) {

    return (


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
                        <li className="list-group-item">Succulent-Garden</li>
                    </ul>

                </div>
            </div>


        </div>
    )

};

export default GetStartedList;