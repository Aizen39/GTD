import axios from 'axios';
import React, { useState } from 'react';

const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');
    

     axios.post(`${process.env.REACT_APP_API_URL}api/user/login`,
      {
        email,
        password

      }).then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = '/';
        }
      })
      .catch((err) => {
        console.log(err);
      });

/* 
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    }) */
      
  };


  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlfor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email} />
      <br />

      <div className="email error">

      </div>
      <br />
      <label htmlfor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password} />

      <div className="password error">
      </div>
      <br />
      <input type="submit" value="Se connecter" />

    </form>
  );
};

export default SignInForm;