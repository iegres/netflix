import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.freepnglogos.com/uploads/red-logo-png-16.png"
            alt="Streaming service logo"
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton"><Link to="/" className="link">Sign In</Link></button>
          <span>
            New to Netflix? <Link to="/register" className="link" style={{justifyContent: "start"}}><b>Sign up now.</b></Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="https://www.google.com/recaptcha/about/"
              className="link"
              style={{justifyContent: "start"}}
              target="_blank"
              rel="noreferrer"
            >
              <b> Learn more</b>.
            </a>
          </small>
        </form>
      </div>
    </div>
  );
}
