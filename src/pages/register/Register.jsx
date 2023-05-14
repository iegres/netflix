import { useRef } from "react";
import { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value || " ");
  };
  const handleFinish = (e) => {
    e.preventDefault();
    // setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.freepnglogos.com/uploads/red-logo-png-16.png"
            alt="Streaming service logo"
          />
          <button className="loginButton">
            <Link to="/login" className="link">
              <span>Sign In</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              <Link to="/" className="link">
                <span>Start</span>
              </Link>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
