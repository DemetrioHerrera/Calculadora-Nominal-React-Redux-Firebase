import React, { useState } from "react";
import { useDispatch } from "react-redux";

import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

import { googleLogin, emailAndPassworLogin } from "../actions/auth";

const LoginScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { email, password } = data;

  const handleChange = e => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleEmailAndPasswordLogin = e => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes("@")) return;
    if (password.trim().length < 6) return;

    dispatch(emailAndPassworLogin(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <div className='container'>
      <h3>Login</h3>
      <hr />
      <div className='row container'>
        <form onSubmit={handleEmailAndPasswordLogin} className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>email</i>
              <input
                onChange={handleChange}
                value={email}
                name='email'
                type='email'
                id='icon_prefix1'
                className='materialize-textarea'
              />
              <label htmlFor='icon_prefix1'>Email</label>
            </div>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name='password'
                type='password'
                id='icon_prefix2'
                className='materialize-textarea'
              />
              <label htmlFor='icon_prefix2'>Password</label>
            </div>
          </div>
          <button type='submit' className='btn waves-effect waves-light'>
            Enviar
          </button>
          <hr />
          <GoogleButton onClick={handleGoogleLogin} />
          <Link to='/auth/register'>Register in the platform</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
