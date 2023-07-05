import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Login = () => {
  const [theme, setTheme] = useState(false);

  const handleDark = () => {
    if (theme !== "dark-theme-component") {
      setTheme("dark-theme-component");
    } else {
      setTheme("");
    }
  };

  return (
    <>
      <button onClick={handleDark} className="theme-btn-parent">
        Change Theme <i class="bi bi-brightness-high"></i>
      </button>
      <div className={theme ? "dark-theme-component" : "signup-parent"}>
        <div className="headings">
          <span className="link-parent">
            <Link className="link-child" to="/">
              SignUp
            </Link>
          </span>
          <span className="link-parent">
            <Link className="link-child" to="/login">
              LogIn
            </Link>
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
              <button className="signup-btn">LogIn</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
