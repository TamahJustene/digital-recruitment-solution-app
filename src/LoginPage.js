import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic
    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const user = usersData.find((u) => u.email === email && u.password === password);

    if (user) {
      // Login successful
      console.log('Login successful');
      // Navigate to the home page or the desired route
      navigate('/');
    } else {
      // Invalid credentials
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <header>
        <nav className="navbar">
          <Link to="/" className="logo">RecruitMe</Link>
        </nav>
      </header>
      <section className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
      </section>
      <footer>
        <div className="footer-content">
          <p className="footer-text">© 2023 RecruitMe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
