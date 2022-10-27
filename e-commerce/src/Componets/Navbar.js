import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import "./styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const state = useSelector((state) => state.basketReducer);

  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <div className="navbar-items">
        <NavLink to="/">Home</NavLink>
        <a href="#contact">Contact</a>
        <NavLink to="/products">All Clothing</NavLink>
        <NavLink to="/signup">Sing Up</NavLink>
        <NavLink to="/user">
          <AiOutlineUser />
        </NavLink>

        <NavLink to="/basket">
          <BsFillCartFill id="basket" />
          <div className="num-items ">{state.length} </div>
        </NavLink>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
