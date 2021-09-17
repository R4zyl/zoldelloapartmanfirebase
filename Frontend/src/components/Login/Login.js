import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import '../../styles/Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const validateUserInput = () => {
    if (!email && !password) {
      throw Error ('Email and password are required');
    };
    if (!email || !password) {
      throw Error (`${!email ? 'Email' : 'Password'} is required.`);
    };
    if (password.length < 6) {
      throw Error ('Password must be at least 6 characters.');
    };
  };

  const handleSubmit = async submitEvent => {
    submitEvent.preventDefault();
    try {
      validateUserInput();
      await auth
        .signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="loginBox">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="loginTitle">Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={changeEvent => {
              setEmail(changeEvent.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            value={password}
            onChange={changeEvent => {
              setPassword(changeEvent.target.value);
            }}
          />
          <button data-testid="0001" type="submit">Sign in</button>   
        </form>
    </div>
  );
};