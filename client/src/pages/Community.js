import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import SearchForm from "../components/SearchForm"
import Tree from "../images/Tree.svg";
// Plant image below for testing only

import FindUserInputResults from "../components/FindUserInputResults";
import UserExperienceCard from "../components/UserExperienceCard";
import JoinCommunityTitle from "../components/JoinCommunityTitle";

function Community() {

    const [searchPlant, setSearchPlant] = useState("");
    useEffect(()=> {
        
    })

    const handleFormSubmit = event => {
        event.preventDefault();

    }

    const handleInputChange = (event) => {setSearchPlant(event.target.value)}

    return (
        <div className="">
            <Title />
            <JoinCommunityTitle/>
            {/* <div className="row container mx-auto card shadow mt-3 text-center rounded">

                <div className="card-body col-md-12 col-sm-3 d-flex justify-content-between align-items-center">
                    <span><img src={Tree} alt="Tree" /></span>
                    <div >
                        <h3>Join our Community,</h3>
                        <p>Find Tips and Ideas to Make Your Project Come to Life.</p>
                    </div>

                    <span><img src={Tree} alt="Tree" /></span>
                </div>

            </div> */}
            <section className="row mainSection d-flex  justify-content-center align-items-center">
                <div className="col-md-4 col-xs-2 border pr-5 pl-5 pt-2 shadow rounded"  >
                    <h4 className="text-center">Search For Your Plant Below<br />
              Filer By:</h4><br />
                    
                    <SearchForm
                    handleInputChange={handleInputChange}
                    value = {searchPlant}
                    />

                </div>
            </section>

            <section className="row  mx-auto justify-content-md-center px-5">

                <FindUserInputResults/>
               
                <UserExperienceCard/>

            </section>


        </div>
    );
}

export default Community;