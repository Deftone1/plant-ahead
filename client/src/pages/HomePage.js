import { useState } from "react";
import "../styles/Home.css";
import Tree from "../images/Tree.svg";
import plantMain from "../images/plant-welcome.png";
import Plant from "../images/Plant.png";
import Community from "../images/Community.png";

import { useSpring, animated } from "react-spring";


function HomePage() {

  const [data, setData] = useState(null);
  // useEffect(() => {
  //   API.getPublicExample().then((response) => {
  //     setData(response.data);
  //   });
  // }, []);

  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });


  return (
    <animated.div className="HomePage" style={fade}>
      <header>
        <h1 className="welcome-font">
          Plan<img src={Tree} alt="Tree"></img> Ahead
        </h1>

      </header>
      <div><img
        className="plantImageHeader"
        src={plantMain}
        alt="plant-ahead-welcome"
      ></img></div>
      <br></br>
      <br></br>
      <section className="section-home">
        <p><span className="welcome-font">
          Welcome to Plan(t) Ahead.</span><br></br>

          Join us in creating a community of plant enthusiasts. Discover new
          plant species and families and add them to your next gardening
          project. View community input and advice in regards to growing certain
          plant types. <br /><br></br>
          <span className="slogan">Discover Together - Learn Together</span>
        </p>
      </section>

      <div className="PlantImages">
        <img src={Plant} alt="Plant"></img>
        <img src={Community} alt="Community"></img>
      </div>
      {/* <div className="HomeButtons">
        <Link to="/login">
          <button id="logInBtn">Login</button>
        </Link>
        <Link to="signup">
          <button id="joinBtn">Join</button>
        </Link>
      </div> */}
      {/* <h3>Public API Data</h3>
      <h1>HELLO, WORLD!</h1>
      <p>{data && data.message}</p> */}
    </animated.div>

  );
}
export default HomePage;
