import React from "react"
import { Carousel } from "react-bootstrap"
import "../styles/Results.css";

// changed this to a function not a variable
function Results(props) {
    
    //  deconstructing props here and defining trees
    const { trees } = props;
    const plantList = trees
        .map((tree) => (
            // creating image slideshow
            <Carousel.Item key={tree.key} >
                <img src={tree.image_url} alt={tree.name} className="resultspPlant border rounded  img-thumbnail img-fluid" />
                <Carousel.Caption>
                    <h3>{tree.name}</h3>
                    <p>{tree.family}</p>
                    <p>{tree.genus}</p>
                </Carousel.Caption>
            </Carousel.Item>

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
                <div className="col" >
                    <Carousel >
                        {plantList}
                    </Carousel>

                </div>

            </div>
        </div>

    )

};
export default Results


