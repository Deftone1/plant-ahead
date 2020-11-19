
import React from "react";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import "../styles/Main.css";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import UserProfile from "../components/UserProfile";
import GetStartedList from "../components/GetStartedList";
import Footer from "../components/Footer";
import API from "../util/API";


function Main() {

  const { logout, user } = useAuth();
  const [search, setsearch] = useState("")
  const [results, setresults] = useState([])
  const [trees, settrees] = useState([])
  const handleInputChange = event => {
    setsearch(event.target.value)
  }
  
  const handleFormSubmit = event => {
    event.preventDefault();
    API.trefle(search)
      .then(res => {
        console.log(res.data)
        let results = res.data
        results = results.map(result => {
          result = {
            key: result.id,
            name: result.common_name,
            family: result.family_common_name,
            image_url: result.image_url,
            genus: result.genus
          }
          return result;
        })
        settrees(results)
      })
      .catch(err => {
        throw err
      })
  }

  return (
    <div className="MainPage mb-5">
      <Title />
      
      <div className="row  container-fluid MainPageContainer mx-auto">

        {/* Left-Hand Side  */}
        <section className="col-md-2 col-xs-2 leftContentColumn">

          <UserProfile />
          <GetStartedList />

        </section>

        {/* Main section starts here Right-Side*/}
        <section className="col ">

          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
          />

          {/* Image section starts here */}
          <section className="row imageRow" >
            <Results trees={trees} />
          </section>

        </section>

      </div>

      <Footer/>

    </div>
  );
}

export default Main;