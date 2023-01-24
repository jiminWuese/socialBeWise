import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>beWise Cooperative</h1>
          <p>
            Welcome to beWise Cooperative, were everyone makes wealth and is
            happy.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username/Email" />
            <input type="number" placeholder="Phone Number" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
