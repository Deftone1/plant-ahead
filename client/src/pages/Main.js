import React from "react";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import "../styles/Main.css"
import Plant from "../images/Plant.png"
import Results from "../components/Results"
import SearchForm from "../components/SearchForm"
import API from "../util/API";

function Main() {
  const { logout, user } = useAuth();
  const [search, setsearch] = useState("")
  const [results, setresults] = useState([])
  const [trees, settrees] = useState([])
  const [userdata,setuserdata]=useState(null)


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
                    genus: result.genus,
                    user_id:user.id
                }
            return result; 
            })
            settrees(results)
        })
        .catch(err => {
            throw err
        })
}
  const saveplantbutton = event => {
    event.preventDefault();

  }

  return (
    <div className="MainPage mb-5">
      <Title />

      {/* Page container holds everything */}
      <div className="row  container-fluid MainPageContainer mx-auto">

        <section className="col-md-2 col-xs-2 leftContentColumn">
          {/* div holding user profile and garden list starts here */}
          <div className="row d-flex justify-content-center pt-2">
            <div className="card shadow " style={{ width: '15rem' }}>
              {/* Profile */}
              <div className="card-body ">
                <img className="card-image rounded img-thumbnail mx-auto d-block" style={{ maxWidth: "50%", maxHeight: "50%" }} src={Plant} />
                <h5 className="card-title text-center">User Name</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bio:</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet lacus, nec scelerisque lorem.</p>
                <button className="btn btn-primary">Sign-Out</button>

              </div>
            </div>

          </div>
          <div className="row getStartedLists d-flex justify-content-center pt-5 pb-5">
            <div className="card shadow " style={{ width: '15rem' }}>

              <div className="card-body ">

                <h5 className="card-title text-center">Get Started</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gardens</h6>
                <ul className="list-group clearfix"  >
                  <li className="list-group-item disabled" aria-disabled="true">Fly-Trap Garden</li>
                  <li className="list-group-item">Vegetable-Garden</li>
                  <li className="list-group-item">Rose-Garden</li>
                  <li className="list-group-item">Cactus-Garden</li>
                  <li className="list-group-item">Succubus-Garden</li>
                </ul>

              </div>
            </div>
            

          </div>

        </section>
        {/* Right hand-side content  */}
        <section className="col ">
          {/* Main section starts here */}
          <section className="row mainSection d-flex  justify-content-center align-items-center">
            <div className="col-md-4 col-xs-2 border pr-5 pl-5 pt-2 shadow"  >
              <h4 className="text-center">Search For Your Plant Below<br />
              Filer By:</h4><br />
              {/* Checklist goes here */}
              <SearchForm
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
              />

            </div>
          </section>
          {/* Image section starts here */}
          <section>
            <Results trees={trees}/>
          </section>

      
        </section>
        
      </div>
      <footer className="bg-dark fixed-bottom col-lg-12 text-center">
      <h1>Footer Goes here</h1>

      </footer>

    </div>
  );
}

export default Main;