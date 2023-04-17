import React from 'react';
import "./Login.css"

function Login() {
  return (
    <div className='login'>
    <form action="#!" id="main">
    <h2>Login to your account</h2>

    <div class="input-parent">
      <label for="username">Username or Email</label>
      <input type="text" id="username"/>
    </div>

    <div class="input-parent">
      <label for="password">Password</label>
      <input type="password" id="password" />
    </div>

    <button type="submit">Login</button>
    <button type="submit">Sign UP</button>
  </form>
    </div>
  )
}

export default Login
