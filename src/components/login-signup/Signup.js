import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [theme, setTheme] = useState(false);

  const handleDark = () => {

  
    if(theme !== "dark-theme-component"){

        setTheme("dark-theme-component");}
    
   else{
    setTheme("")
   }
      

   
  };

  return (
    <>
      <button onClick={handleDark} className="theme-btn-parent">
        Change Theme <i class="bi bi-brightness-high"></i>
      </button>
      <div className={theme ? "dark-theme-component" : "signup-parent"}>
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
              <input
                className="email"
                type="email"
                placeholder="Enter Email Here..."
              />
            </div>
            <div className="input input-password">
              <input
                className="password"
                type="password"
                placeholder="Enter Password Here..."
              />
              <button className="signup-btn">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
