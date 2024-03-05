import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./forgot.css";
import { useNavigate } from "react-router-dom";

function Forget() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

   const mail=()=>{
    if (!email){
      alert('Please fill out the required field!')
    }
    else{
    alert('Password Reset Link Has Been Sent To Your Mail!');
   }
  }

  const backtol = () => {
    navigate("/");
  };

  return (
    <div className="main_div container w-50">
      
        <img src="https://www.ldtech.in/images/logo.png" alt="logo" />
        <div>
          <p className="p1">Forgot Password</p>
          <span className="s1">
            Enter your email and we'll send you a link to reset your password.
          </span>
        </div>
        <br />
        <div className="box">
          <div className="eicon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            type="email"
            className="form-control w-100"
            id="email"
            onChange={handleEmailChange}
            required
          />
        </div>
        <br />
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-dark form-control w-75"
            onClick={mail}
          >
            Submit
          </button>
          
          <span>
            <p className="a1" onClick={backtol}>
              &lt; Back to Login
            </p>
          </span>
        </div>
      </div>
    
  );
}

export default Forget;
