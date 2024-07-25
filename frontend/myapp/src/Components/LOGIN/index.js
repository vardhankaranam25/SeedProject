import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './index.css';

const roles = [
  { id: 'user', displayText: 'User' },
  { id: 'scientist', displayText: 'Scientist' },
  { id: 'analyst', displayText: 'Analyst' },
  { id: 'admin', displayText: 'Admin' },
];

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(roles[0].id);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userName === '' || password === '') {
      alert("Enter Your Credentials!!!");
    } else {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          userName,
          password
        });
        if (response.data.success) {
          console.log("Login success");
          sessionStorage.setItem('isLoggedIn', true);
          sessionStorage.setItem('userName', userName);
          sessionStorage.setItem('role', role);
          navigate(`/${role}/${userName}/`);
        } else {
          alert("Invalid Credentials!");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  const onChangeUsername = (event) => {
    setUserName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeRole = (event) => {
    setRole(event.target.value);
  };

  const onBlurName = () => {
    if (userName === '') {
      setIsNameEmpty(true);
    } else {
      setIsNameEmpty(false);
    }
  };

  const onBlurPassword = () => {
    if (password === '') {
      setIsPasswordEmpty(true);
    } else {
      setIsPasswordEmpty(false);
    }
  };

  // Redirect to the home page if logged in
  if (sessionStorage.getItem('isLoggedIn')) {
    return <Navigate to={`/${sessionStorage.getItem('role')}/${sessionStorage.getItem('userName')}/`} />
  }

  return (
    <div className="login-pg-container">
      <form className="login-card-container" onSubmit={onSubmit}>
        <h1 className="main-heading">Log in</h1>
        <div className="input-text">
          <TextField
            id="outlined-required"
            label="name"
            type="text"
            placeholder="Enter Your Name"
            autoComplete="off"
            onChange={onChangeUsername}
            value={userName}
            className="input-text"
            onBlur={onBlurName}
          />
          {isNameEmpty ? <p className="error-msg">Enter the Name</p> : null}
        </div>
        <div className="input-text">
          <TextField
            id="outlined-password-input"
            label="password"
            type="password"
            value={password}
            placeholder="Enter your Password"
            autoComplete="current-password"
            onChange={onChangePassword}
            className="input-text"
            onBlur={onBlurPassword}
          />
          {isPasswordEmpty ? <p className="error-msg">Enter the Password</p> : null}
        </div>
        <div className="input-text">
          <select
            id="outlined-select-option"
            value={role}
            className="select-role"
            onChange={onChangeRole}
          >
            {roles.map((name) => (
              <option
                key={name.id}
                value={name.id}
                className="options"
              >
                {name.displayText}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" variant="contained" size="medium">Submit</Button>
      </form>
    </div>
  );
}

export default LoginPage;
