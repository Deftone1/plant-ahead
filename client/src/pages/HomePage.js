import { useEffect, useState } from "react";
import API from "../util/API";
import "../styles/Home.css";
import Tree from "../images/Tree.svg";
import Plant from "../images/Plant.png"
import Community from "../images/Community.png";

function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getPublicExample().then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="background">
      <header>
        <h1>Plan<img src={Tree} alt="Tree"></img> Ahead</h1>
      </header>
      <section>
        <p>Welcom to Plant(T) Ahead!
        Join us in creating a community of plant enthusiast. Discover new plant species and families and add them to your next  gardening project.
        View community input and advice in regards to growing certain plant types. Discover togeather learn together.
        </p><br/>
        <br></br>
      </section>
      
      <div className="PlantImages" >
      <img  src={Plant} alt="Plant"></img>
      <img  src={Community} alt="Community"></img>
      </div>
      <div className="HomeButtons">
      <button id="logInBtn">Login</button>
      <button id="joinBtn">Join</button>
      </div>
      {/* <h3>Public API Data</h3>
      <h1>HELLO, WORLD!</h1>
      <p>{data && data.message}</p> */}
    </div>
  );
}
export default HomePage;
