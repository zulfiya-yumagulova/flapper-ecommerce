import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="icons-contact">
        <p>Contact Us</p>
        <BsEnvelope className="icon" />
        <AiOutlinePhone className="icon" />
      </div>
      <div className="follow-icons">
        <p>Stay Connected</p>
        <BsInstagram className="icon" />
        <AiOutlineFacebook className="icon" />
        <FiTwitter className="icon" />
      </div>
      <div className="help">
        <p>How Can We Help?</p>
        <a
          href="https://www.laughinghens.com/clothing-size-conversion-chart"
          target="_blank"
          style={{ textDecoration: "none", color: "#ffff" }}
        >
          Size Guide
        </a>
        <p>Size Map</p>
        <p>Help</p>
      </div>
    </footer>
  );
}

export default Footer;
