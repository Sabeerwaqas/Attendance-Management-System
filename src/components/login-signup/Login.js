import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";


const Login = () => {
  const [theme, setTheme] = useState(false);

  const handleDark = () => {
    if (theme !== "dark-theme-component") {
      setTheme("dark-theme-component");
    } else {
      setTheme("");
    }
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  }

  

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
          <form onSubmit={handleSubmit}>
            <div className="input input-email">
              <input
                className="email"
                type="email"
                placeholder="Enter Email Here..."
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input input-password">
              <input
                className="password"
                type="password"
                placeholder="Enter Password Here..."
                onChange={e => setPassword(e.target.value)}
              />
              <button type="submit" className="signup-btn">LogIn</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
