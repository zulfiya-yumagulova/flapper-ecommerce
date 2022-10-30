import React from "react";
import "./styles/SignUp.css";

function SignUpForm() {
  return (
    <div className="form-container">
      <h1 className="title">Sign Up</h1>
      <form className="form">
        <input className="inputs" type="text" placeholder="First Name" />
        <input className="inputs" type="text" placeholder="Last Name" />
        <input className="inputs" type="text" placeholder="Email" />
        <input className="inputs" type="text" placeholder="Password" />
        <input type="submit" className="btn-light inputs" />
      </form>
    </div>
  );
}

export default SignUpForm;
