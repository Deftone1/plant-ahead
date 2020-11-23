
import React from "react";
import Title from "../components/Title";
import { useState } from "react";
import { useAuth } from "../util/authContext";
import "../styles/Main.css";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";
import UserProfile from "../components/UserProfile";
import GetStartedList from "../components/GetStartedList";
import Footer from "../components/Footer";
import API from "../util/API";
import { useSpring, animated } from "react-spring";
// import Toast from 'react-bootstrap/Toast';
import ToastNotification from "../components/ToastNotification";

function Main() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  const { logout, user } = useAuth();
  const [search, setsearch] = useState("");
  const [results, setresults] = useState([]);
  const [trees, setTrees] = useState([]);
  const [userdata, setuserdata] = useState(null);
  const [show, setShow] = useState(false);



  const handleInputChange = event => {
    setsearch(event.target.value)
    console.log(search)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.trefle(search)
      .then(res => {
        let results = res.data
        results = results.map(result => {
          result = {
            key: result.id,
            name: result.common_name,
            family: result.family_common_name,
            image_url: result.image_url,
            genus: result.genus,
            user_id: user.id,
            id: result.id,
            notes: "placeholder"
          }
          return result;
        })
        setTrees(results)
      })
      .catch(err => {
        throw err
      })
  }
  const closeToast = () => {
    setShow(false);

  };


  const saveplantbutton = event => {
    event.preventDefault();
    let savedplant = trees.filter(tree => JSON.stringify(tree.id) === event.target.id)
    savedplant = savedplant[0]
    API.savePlant(savedplant)
      .catch(err => console.log(err))
    setShow(true)

  }

  return (
    <animated.div className="MainPage mb-5" style={fade} >
      <Title />

      <div className="row  container-fluid MainPageContainer mx-auto">

        {/* Left-Hand Side  */}
        <section className="col-md-2 col-xs-2 leftContentColumn">

          <UserProfile user={user} />
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

            <Results trees={trees} handleSavedButton={saveplantbutton} />

            <ToastNotification
              setShow={setShow}
              show={show}
              style={{
                position: 'absolute',
                top: -130,
                right: 200,
              }}

            />

          </section>

        </section>

      </div>

      <Footer />

    </animated.div>
  );
}

export default Main;