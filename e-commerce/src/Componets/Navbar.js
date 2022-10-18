import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="navbar-items">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/cart">
          <BsFillCartFill id="basket" />
          <div className="num-items "> 3</div>
        </Link>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
