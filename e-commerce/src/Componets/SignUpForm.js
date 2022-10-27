import React from "react";
import "./styles/SignUp.css";

function SignUpForm() {
  return (
    <div className="form-container">
      <h1>Sign Up</h1>

      <div className="inputs">
        <form className="form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="submit" className="btn-light btn" />
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
