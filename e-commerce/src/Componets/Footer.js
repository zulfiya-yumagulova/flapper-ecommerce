import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div id="contact" className="icons-contact">
        <h4 className="footer-header">Contact Us</h4>
        <BsEnvelope className="icon" />
        <AiOutlinePhone className="icon" />
      </div>
      <div className="follow-icons">
        <h4 className="footer-header">Stay Connected</h4>
        <BsInstagram className="icon" />
        <AiOutlineFacebook className="icon" />
        <FiTwitter className="icon" />
      </div>
      <div className="help">
        <h4 className="footer-header">How Can We Help?</h4>
        <a
          href="https://www.laughinghens.com/clothing-size-conversion-chart"
          target="_blank"
          className="size-link"
        >
          Size Guide
        </a>
        <h4 className="footer-header" id="help">
          Help
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
