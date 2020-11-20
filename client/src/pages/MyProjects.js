import React from "react";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import "../styles/my-projects.css";
import API from "../util/API";
import GardenCard from "../components/GardenCard";
import SavedPlants from "../components/SavedPlants";
import Tree from "../images/Tree.svg";
import leaves from "../images/leaves.png";
import { useSpring, animated } from "react-spring";


function MyProjects() {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });


  const [data, setData] = useState(null);
  const { logout, user } = useAuth();
  const [plants, setplants] = useState([]);
  const [gardentitle, setgardentitle] = useState("")
  const [gardens, setgardens] = useState([])
  const loadPlants = (user_id) => {
    API.getPlantbyuserid(user_id).then((response) => {
      setplants(response.data);
    });
  };

  const loadGardens = (user_id) => {
    API.getgardenbyuserid(user_id).then((response) => {
      setgardens(response.data);
    });
  };

  useEffect(() => {
    loadPlants(user.id)
    loadGardens(user.id)
  }, []);

  const removeplant = (id) => {
    API.removeplantbyid(id).then(res => loadPlants(user.id))
      .catch(err => console.log(err))

  }

  const handleformchange = event => {
    event.preventDefault();
    setgardentitle(event.target.value)
  }
  const creategarden = event => {
    event.preventDefault();
    API.createGarden({
      name: gardentitle,
      user_id: user.id
    }).then(res => {
      setgardentitle("");
      loadGardens(user.id)
    }
    )
  }
  const addplanttogarden = (garden, plant) => {
    API.savePlanttoGarden(garden, plant)
  }

  const removegarden =(id) => {
    API.deletegardenbyid(id).then(res=> loadGardens(user.id))
    .catch(err=>console.log(err))
  }


  return (
    <animated.div className="MyProjects" style={fade}>
      <Title />
      <header>
        <h1 className="welcome-font">
          Plan<img src={Tree} alt="Tree"></img> Ahead
        </h1>
      </header>
      <br></br>

        <form className="project-form col-sm-6">
          <div className="form-group">
            <div className="create-garden">
              <input onChange={handleformchange} value={gardentitle}>

              </input>
              <button className="btn1" onClick={creategarden}>Create Garden</button>
            </div>
          </div>
        </form>
      <div className="row">
        <GardenCard gardens={gardens} removegarden={removegarden}/>
        <SavedPlants plants={plants} gardens={gardens} removeplant={removeplant} addplanttogarden={addplanttogarden} />
      </div>
      <div><img
        className="plantImageTwo"
        src={leaves}
        alt="plant-ahead-welcome"
      ></img></div>
      
    </animated.div>
  );
}
export default MyProjects;
