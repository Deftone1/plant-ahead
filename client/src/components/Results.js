import React from "react"
import { Carousel } from "react-bootstrap"
import Plant from "../images/Plant.png"
import "../styles/Results.css";

// changed this to a function not a variable
function Results(props) {

    //  deconstructing props here and defining trees
    const { trees } = props;
    const plantList = trees
        .map((tree) => (



            // <div className="card " style={{ width: "30rem" }}>
            //     <img src={tree.image_url} className="card-img-top text-center mx-auto" style={{ width: "200px", height: "200", objectFit: "contain" }} alt={tree.name} />
            //     <div className="card-body">
            //         <h5 className="card-title">{tree.name}</h5>
            //         <p className="card-text">{tree.family}</p>
            //         <p className="card-text">{tree.genus}</p>
            //         <a href="#" className="btn btn-primary">Go somewhere</a>
            //     </div>

            // </div>
            <div class="col mb-4">
                <div class="card">
                    <img src={tree.image_url} class="card-img-top" alt="Test" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            // creating image slideshow
            // <Carousel.Item key={tree.key} >
            //     <img src={tree.image_url} alt={tree.name} className="resultspPlant border rounded  img-thumbnail img-fluid" />
            //     <Carousel.Caption>
            //         <h3>{tree.name}</h3>
            //         <p>{tree.family}</p>
            //         <p>{tree.genus}</p>
            //     </Carousel.Caption>
            // </Carousel.Item>

        ));

    // ---------------------------------------------------------- Ver's code below ----------------------------------------------------------------------------------------------------
    // What is this for? I will change momentarily.
    // return (props.trees.length === 0) ? (
    //     <div className="card">
    //         <div className="card-body player">
    //             <div className="article">
    //                 <h3>Search Results</h3>
    //             </div>
    //         </div>
    //     </div>
    // ) : 

    // (
    //     <div className="card">
    //         <div className="card-body player">
    //             <div className="article">
    //                 <h3>Search Results</h3>
    //                 {props.trees.map(tree => {
    //                     return (
    //                         <li>
    //                             <div className="row">
    //                                 <div className="col-2">
    //                                     <img src={tree.image_url} alt={tree.name} className="plant"/>
    //                                 </div>
    //                                 <div className="col-10">
    //                                     <div className="row">
    //                                         <h3>{tree.name}</h3>
    //                                     </div>
    //                                     <div className="row">
    //                                         <h3>{tree.family}</h3>
    //                                     </div>
    //                                     <div className="row">
    //                                         <h3>{tree.genus}</h3>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </li>
    //                     )
    //                 })}
    //             </div>
    //         </div>
    //     </div>
    // )
    // -------------------------------------------------------------------------------------------------- Refactored Code Below--------------------------------------
    return (
        <div className="col-md-8 mx-auto   border shadow" >
            <div className="row">
                <div className="col">
                    <h3 className="searchTitle">Search Results:</h3>
                </div>


                <div class="row row-cols-1 row-cols-md-3">
                    {plantList}

                </div>


                {/* < div className="row card-deck row-cols-6 resultsPlant"> */}
                {/* {plantList} */}
                {/* <div className="card " style={{ width: "30rem" }}>
                        <img src={Plant} className="card-img-top text-center mx-auto" style={{ width: "200px", height: "200", objectFit: "contain" }} alt="Sample" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>

                    </div>
                    <div className="card " style={{ width: "25rem", height: "" }}>
                        <img src={Plant} className="card-img-top mx-auto" style={{ width: "200px", height: "200", objectFit: "contain" }} alt="Sample" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>

                    </div> */}

                {/* </div> */}

                {/* <div className="col" >
                    <Carousel >
                        {plantList}
                    </Carousel>

                </div> */}

            </div>
        </div>

    )

};
export default Results


