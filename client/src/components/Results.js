import React from "react"
import "../styles/Results.css";
const Results = props => {
    return (props.trees.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                    {props.trees.map(tree => {
                        return (
                            <li>
                                <div className="row">
                                    <div className="col-2">
                                        <img src={tree.image_url} alt={tree.name} className="plant"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <h3>{tree.name}</h3>
                                        </div>
                                        <div className="row">
                                            <h3>{tree.family}</h3>
                                        </div>
                                        <div className="row">
                                            <h3>{tree.genus}</h3>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Results