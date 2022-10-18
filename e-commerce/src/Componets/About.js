import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h3>This Is A E-Shop</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque saepe
        doloremque nemo. Ipsa voluptatum eveniet quis, voluptate veniam illo
        qui!
      </p>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default About;
