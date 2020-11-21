import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import FindUserInputResults from "../components/FindUserInputResults";
import UserExperienceCard from "../components/UserExperienceCard";
import JoinCommunityTitle from "../components/JoinCommunityTitle";
import {useSpring, animated} from "react-spring";

function Community() {

    const fade = useSpring({
        from: {
          opacity: 0
        },
        opacity: 1
      });

    const [searchPlant, setSearchPlant] = useState("");
    useEffect(() => {

    })

    const handleFormSubmit = event => {
        event.preventDefault();

    }

    const handleInputChange = (event) => { setSearchPlant(event.target.value) }

    return (
        <animated.div className="" style={fade}>
            <Title />
            <JoinCommunityTitle />

            {/* <SearchForm
                handleInputChange={handleInputChange}
                value={searchPlant}

            /> */}

            <section className="row  mx-auto justify-content-md-center px-5">

                <FindUserInputResults />

                <UserExperienceCard />

            </section>


        </animated.div>
    );
}

export default Community;