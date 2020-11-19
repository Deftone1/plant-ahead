import React from "react";
import Title from "../components/Title";
import SearchForm from "../components/SearchForm"
import Tree from "../images/Tree.svg";
function Community() {

    const handleFormSubmit = event => {
        event.preventDefault();

    }

    const handleInputChange = event => {
        event.preventDefault();
        // insert code here to query for plant in database saved by users
    }

    return (
        <div className="">
            <Title />
            <div className="row container mx-auto card shadow mt-3 text-center ">

                <div className="card-body col d-flex justify-content-between align-items-center">
                    <span><img src={Tree} alt="Tree" /></span>
                    <div >
                        <h3>Join our Community,</h3>
                        <p>Find Tips and Ideas to Make Your Project Come to Life.</p>
                    </div>

                    <span><img src={Tree} alt="Tree" /></span>
                </div>

            </div>
            <section className="row mainSection d-flex  justify-content-center align-items-center">
                <div className="col-md-4 col-xs-2 border pr-5 pl-5 pt-2 shadow"  >
                    <h4 className="text-center">Search For Your Plant Below<br />
              Filer By:</h4><br />
                    {/* Checklist goes here */}
                    <SearchForm
                    // handleFormSubmit={handleFormSubmit}
                    // handleInputChange={handleInputChange}
                    />

                </div>
            </section>

            <section className="row  mx-auto p-0 m-0">
                {/* Plant List from search listed in this card */}
                <div className="col-md-5">
                    <div className="getStartedLists d-flex justify-content-center pt-5 pb-5">
                        <div className="card shadow " style={{ width: '25rem' }}>

                            <div className="card-body ">

                                <h5 className="card-title text-center">User-Experience</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Plant List</h6>
                                <ul className="list-group ml-0 "  >

                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center" >
                                        <h6>Fly-Trap Garden</h6>
                                       <button type="button" className="addPlanToList btn btn-primary d-flex justify-content-between " style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center" >
                                        <h6>Fly-Trap Garden</h6>
                                       <button type="button" className="addPlanToList btn btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center" >
                                        <h6>Vegetable-Garden</h6>
                                       <button type="button" className="addPlanToList btn btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center" >
                                        <h6>Rose-Garden</h6>
                                       <button type="button" className="addPlanToList btn btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center" >
                                        <h6>Succubus-Garden</h6>
                                       <button type="button" className="addPlanToList btn btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    
                                 
                                </ul>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-md-7">
                    Hello World
              </div>

            </section>


        </div>
    );
}

export default Community;