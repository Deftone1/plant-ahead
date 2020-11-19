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
    useEffect(() => {

    })

    const handleFormSubmit = event => {
        event.preventDefault();

    }

    const handleInputChange = (event) => { setSearchPlant(event.target.value) }

    return (
        <div className="">
            <Title />
            <JoinCommunityTitle />

            <SearchForm
                handleInputChange={handleInputChange}
                value={searchPlant}

            />

            <section className="row  mx-auto justify-content-md-center px-5">

                <FindUserInputResults />

                <UserExperienceCard />

            </section>


        </div>
    );
}

export default Community;