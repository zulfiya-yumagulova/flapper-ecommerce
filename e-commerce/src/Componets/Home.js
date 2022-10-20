import React from "react";
import BackgroundImage from "../images/fashion.jpg";
import "./Home.css";

function Home() {
  return (
    <div
      id="home"
      className="showcase"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "450px",
      }}
    >
      <div className="overlay">
        <h2>e-Shop</h2>
      </div>
    </div>
  );
}

export default Home;
