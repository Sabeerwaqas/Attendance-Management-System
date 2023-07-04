import React from "react";
import "./signup.css";

const Signup = () => {

    



  return (
    <>
      <div className="signup-parent">
        <div className="headings">
          <span>
            <h2>SignUp</h2>
          </span>
          <span>
            <h2>LogIn</h2>
          </span>
        </div>
        <div>
          <form>
            <div className="input input-email">
              <input className="email"
               type="email"
               placeholder="Enter Email Here..."
                />
            </div>
            <div className="input input-password">
              <input className="password"
               type="password"
               placeholder="Enter Password Here..."
                />
                <button className="signup-btn">
                SignUp
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
