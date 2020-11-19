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



function MyProjects() {
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

  const removeplant = (id)=>{
    API.removeplantbyid(id).then(res=>loadPlants(user.id))
    .catch(err=>console.log(err))

  }

  const handleformchange = event =>{
    event.preventDefault();
    setgardentitle(event.target.value)
  }
  const creategarden = event =>{
    event.preventDefault();
    console.log(gardentitle)
    API.createGarden({
      name:gardentitle,
      user_id:user.id}).then(res =>{
        setgardentitle("");
        loadGardens(user.id)}
        )
  }

  return (
    <div className="MyProjects">
      <Title />
      <header>
        <h1>
          Plan<img src={Tree} alt="Tree"></img> Ahead
        </h1>
      </header>
      <br></br>

      <div className="row">
  <GardenCard gardens={gardens}/>
  <SavedPlants plants={plants} removeplant={removeplant}/>
  <form className="col">
        <div className="form-group">
          <input onChange={handleformchange} value={gardentitle}>

          </input>
          <button onClick={creategarden}>Create Garden</button>
        </div>
      </form>
</div>
<div><img
        className="plantImageTwo"
        src={leaves}
        alt="plant-ahead-welcome"
      ></img></div>
      
    </div>
  );
}
export default MyProjects;
