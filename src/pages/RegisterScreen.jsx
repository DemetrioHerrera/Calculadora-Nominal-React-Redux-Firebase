import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { register } from "../actions/auth";

const RegisterScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const dispatch = useDispatch();

  const { email, username, password, password2 } = data;

  const handleChange = e => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = e => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes("@")) return;

    if (username.trim().length < 2) return;

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }

    dispatch(register(email, username, password));
  };

  return (
    <div className='container'>
      <h3>Register</h3>
      <hr />
      <div className='row container'>
        <form onSubmit={handleRegister} className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>email</i>
              <input
                onChange={handleChange}
                value={email}
                type='email'
                name='email'
                id='icon_prefix1'
                className='materialize-textarea'
              />
              <label htmlFor='icon_prefix1'>Email</label>
            </div>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>assignment_ind</i>
              <input
                onChange={handleChange}
                value={username}
                type='text'
                name='username'
                id='icon_prefix2'
                className='materialize-textarea'
              />
              <label htmlFor='icon_prefix2'>Username</label>
            </div>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                type='password'
                name='password'
                id='icon_prefix3'
                className='materialize-textarea'
              />
              <label htmlFor='icon_prefix3'>Password</label>
            </div>
            <div className='input-field col s12'>
              <i className='material-icons prefix'>vpn_key</i>
              <input
                onChange={handleChange}
                value={password2}
                type='password'
                name='password2'
                id='icon_prefix4'
                className='materialize-textarea'
              />
              <label htmlFor='icon_prefix4'>Confirm Password</label>
            </div>
          </div>
          <button type='submit' className='btn waves-effect waves-light'>
            Enviar
          </button>
          <hr />
          <Link to='/auth/login'>Login into an account</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
