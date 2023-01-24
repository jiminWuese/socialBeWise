import { Link } from "react-router-dom";
import "./login.scss";

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
  <div className="login">
    <div className="card">
      <div className="left">
        <h1>beWise Cooperative</h1>
        <p>Welcome to beWise Cooperative, were everyone
          makes wealth and is happy.
        </p>
        <span>Don't you have an account?</span>
        <Link to="/register">
          <button>Register</button>
        </Link>
        
      </div>
      <div className="right">
        <h1>Login</h1>
        <form action="">
          <input type="text" placeholder="Username/Email"/>
          <input type="password" placeholder="Password"/>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  </div>);
};

export default Login;
