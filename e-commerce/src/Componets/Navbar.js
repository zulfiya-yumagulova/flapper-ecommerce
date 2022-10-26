import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const state = useSelector((state) => state.basketReducer);

  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="navbar-items">
        <Link to="/">Home</Link>
        <a href="#contact">Contact</a>
        <Link to="/products">All Clothing</Link>
        <Link to="/signup">Sing Up</Link>
        <Link to="/user">
          <AiOutlineUser />
        </Link>
        <Link to="/basket">
          <BsFillCartFill id="basket" />
          <div className="num-items ">{state.length} </div>
        </Link>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
