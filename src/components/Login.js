import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const USER_NAME = "Arjun";
const PASSWORD = "Arjun@2024";

const Login = () => {
  const navigation = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userData;

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (username === USER_NAME && password === PASSWORD) {
      navigation("/");
    }
    if (username === "" || password === "") {
      alert("Please Enter the Login Details!");
    }
    if (username !== USER_NAME || password !== PASSWORD) {
      alert("Username or Password is incorrect");
      setUserData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className='login-page d-flex'>
      <h1>LOGIN</h1>
      <form>
        <div className='input-field'>
          <input
            className='form-control'
            type='text'
            name='username'
            placeholder='Enter Username'
            onChange={handleInput}
            value={username}
            required
          />
        </div>
        <div className='input-field'>
          <input
            className='form-control'
            type='password'
            name='password'
            placeholder='Enter Password'
            onChange={handleInput}
            value={password}
            required
          />
        </div>
        <div className='input-field'>
          <button type='submit' onClick={submitForm}>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
