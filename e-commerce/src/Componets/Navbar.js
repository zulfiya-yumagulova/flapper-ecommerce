import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./styles/Navbar.css";

function Navbar() {
  const [mobile, setMobile] = useState(false);

  const state = useSelector((state) => state.basketReducer);

  return (
    <>
      <nav className="navbar">
        <h3 className="logo">Logo</h3>
        <ul
          id="nav-links-mobiles"
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/products" className="about">
            <li>All Clothing</li>
          </Link>
          <Link to="/signup" className="signup">
            <li>Sign Up</li>
          </Link>
          <div className="basket">
            <Link to="/basket">
              <BsFillCartFill id="basket" />
              <div className="num-items ">{state.length} </div>
            </Link>
          </div>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
