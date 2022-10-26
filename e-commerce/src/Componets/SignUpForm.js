import React from "react";
import "./styles/SignUp.css";

function SignUpForm() {
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form className="form">
        <div className="inputs">
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="submit" className="btn-light btn" />
          </form>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
