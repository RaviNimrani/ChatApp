import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Id" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      <div className="user-details">
        <div>
          <h2>👉 User 1</h2>
          <h3>
            <span>Email</span> : ravi@gmail.com
          </h3>
          <h3>
            <span>Password</span> : 123456
          </h3>
        </div>
        <div>
          <h2>👉 User 2</h2>
          <h3>
            <span>Email</span> : hr@gmail.com
          </h3>
          <h3>
            <span>Password</span> : 123456
          </h3>
        </div>
        <div>
          <h2>👉 User 3</h2>
          <h3>
            <span>Email</span> : tony@gmail.com
          </h3>
          <h3>
            <span>Password</span> : 123456
          </h3>
        </div>
      </div>
      n
    </div>
  );
}

export default Login;
