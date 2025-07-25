import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validUsername = process.env.REACT_APP_USERNAME;
  const validPassword = process.env.REACT_APP_PASSWORD;

  // Debugging: Check if the env variables are being read
  console.log("Username from env:", validUsername);
  console.log("Password from env:", validPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    // Debugging: Log user input
    console.log("Entered Username:", username);
    console.log("Entered Password:", password);

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <div className="balloon-bg">
        <span className="balloon">🎈</span>
        <span className="balloon">🎈</span>
        <span className="balloon">🎈</span>
        <span className="balloon">🎈</span>
        <span className="balloon">🎈</span>
      </div>

      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
