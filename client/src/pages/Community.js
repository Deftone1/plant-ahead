import React from "react";
import Title from "../components/Title";
import SearchForm from "../components/SearchForm"
import Tree from "../images/Tree.svg";
// Plant image below for testing only
import Plant from "../images/Plant.png"
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
            <div className="row container mx-auto card shadow mt-3 text-center rounded">

                <div className="card-body col-md-12 col-sm-3 d-flex justify-content-between align-items-center">
                    <span><img src={Tree} alt="Tree" /></span>
                    <div >
                        <h3>Join our Community,</h3>
                        <p>Find Tips and Ideas to Make Your Project Come to Life.</p>
                    </div>

                    <span><img src={Tree} alt="Tree" /></span>
                </div>

            </div>
            <section className="row mainSection d-flex  justify-content-center align-items-center">
                <div className="col-md-4 col-xs-2 border pr-5 pl-5 pt-2 shadow rounded"  >
                    <h4 className="text-center">Search For Your Plant Below<br />
              Filer By:</h4><br />
                    {/* Checklist goes here */}
                    <SearchForm
                    // handleFormSubmit={handleFormSubmit}
                    // handleInputChange={handleInputChange}
                    />

                </div>
            </section>

            <section className="row  mx-auto justify-content-md-center px-5">
                {/* Plant List from search listed in this card */}
                <div className="col-md-3 col-xs-5 pt-2  ">
                    <div className=" d-flex justify-content-center   ">
                        <div className="card shadow " style={{ width: '25rem' }}>

                            <div className="card-body ">

                                <h5 className="card-title text-center">Find User Input</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Plant Searched: {"[Plant Searched goes here]"}</h6>
                                <ul className="list-group ml-0 "  >

                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                        <h6>Rose</h6>
                                        <button type="button" className=" btn btn-primary d-flex justify-content-between " style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                        <h6>Fly-Trap </h6>
                                        <button type="button" className=" btn btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                        <h6>Peas</h6>
                                        <button type="button" className=" btn btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                        <h6>Cactus</h6>
                                        <button type="button" className=" btn btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>
                                    <li className=" list-group-item disabled d-flex justify-content-between align-items-center rounded" >
                                        <h6>Succulent</h6>
                                        <button type="button" className=" btn btn-primary d-flex justify-content-between" style={{ fontSize: "15px" }}>User: UserName Here</button>
                                    </li>


                                </ul>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-md-7 card">
                    <div className=" row d-flex  pb-4 ">
                        <div className=" col-md-11 card shadow mx-auto mt-2" >

                            <div className="card-body ">

                                <h5 className="card-title text-center">View what user {"[userName goes here]"} has to say about this plant</h5>
                                <h6 className="card-subtitle mb-2 text-muted pt-3">Plant Name:{"[Name of Plant Name goes here]"}</h6>


                            </div>
                        </div>


                    </div>
                    {/* User Experience Goes here */}
                    <div className=" d-flex justify-content-center   ">
                        <div className="card shadow " style={{ width: '50rem' }}>
                            <div className="pl-4 pt-4">
                                <h5 className="card-title text-center">User-Experience</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Plant: {"[Plant Name Goes Here]"}</h6>
                            </div>


                            <div className="card-body row no-gutters" >


                                {/* card for user experience results go here */}
                                <div className="card-body border col" style={{ width: '30rem' }}>

                                    <h6 className="card-title text-center">From: {"[UserName Goes here]"}</h6><hr />
                                    <p>
                                        {`[Nullam tortor ipsum, rutrum ut sodales ac, luctus sed metus. Donec porta consectetur eleifend. 
                                            Suspendisse semper erat odio, non luctus ipsum consectetur id. Aliquam ut pellentesque eros. 
                                            Aliquam odio nisi, accumsan et risus ac, consectetur pellentesque dolor. Donec in vulputate massa. 
                                            Cras dapibus, risus nec volutpat mattis, mauris mi euismod justo, in suscipit odio est non lorem. 
                                            Aliquam pretium mauris sit amet sapien malesuada, sed sodales ipsum feugiat]`}
                                    </p>


                                </div>
                                <div className="col">
                                    <img src={Plant} className="card-img fluid-img img-thumbnail" alr="Plant" style={{ width: "200px", objectFit: "contain" }} />

                                </div>

                            </div>

                        </div>


                    </div>
                </div>

            </section>


        </div>
    );
}

export default Community;