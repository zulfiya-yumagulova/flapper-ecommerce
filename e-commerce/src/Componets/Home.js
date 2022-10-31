import React from "react";
import BackgroundImage from "../images/fashion.jpg";
import "./styles/Home.css";
import IMG1 from "../images/accessories.jpg";
import IMG2 from "../images/man.jpg";
import IMG3 from "../images/women.jpg";

function Home() {
  return (
    <>
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
          <h1 className="heading">e-Shop</h1>
        </div>
      </div>
      <div className="circles">
        <div className="circle-1">
          <div className="circle-text">
            <h2 className="header">Our Brand</h2>
            <p className="circle-text">
              We aim empower you to look and feel confident. To increase your
              self-esteem and body positivity to help you realise your true
              potential.
            </p>
          </div>
        </div>

        <div className="circle-2">
          <div>
            <h2>Our Mission</h2>
            <p className="circle-text">
              We are a global brand for all girls, we believe in affordable
              fashion for all. We are the number 1 destination for fashion and
              lifestyle for all the occasions in your life.
            </p>
          </div>
        </div>

        <div className="circle-3">
          <div>
            <h2>Our Aim</h2>
            <p className="circle-text">
              We aim empower you to look and feel confident. To increase your
              self-esteem and body positivity to help you realise your true
              potential.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
