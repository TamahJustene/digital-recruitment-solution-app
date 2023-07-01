import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Perform sign-up logic
    // Check if user already exists with the same email
    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = usersData.find((user) => user.email === email);
    if (existingUser) {
      setError('User already exists. Please log in instead.');
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError('Password and confirm password do not match');
      return;
    }

    // Create a new user
    const newUser = {
      fullName,
      email,
      password,
    };

    // Save the new user to local storage
    usersData.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersData));

    // Registration successful
    console.log('Registration successful');
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <header>
        <nav className="navbar">
          <Link to="/" className="logo">RecruitMe</Link>
        </nav>
      </header>
      <section className="signup-form">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <Link to="/login">Log in</Link></p>
      </section>
      <footer>
        <div className="footer-content">
          <p className="footer-text">© 2023 RecruitMe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
