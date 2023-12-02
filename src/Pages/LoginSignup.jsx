import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <>
     <div className="login-signup">
        <div className="login-signup-container">
          <h1>Sign Up</h1>
          <div className="login-signup-fields">
            <input type="text" name="name" id="name" placeholder='Your Name' />
            <input type="email" name="email" id="email" placeholder='Your Email' />
            <input type="password" name="password" id="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="login-signup-login">
            Already have an account? <span>Login Here</span>
          </p>
          <div className="login-signup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing, I agree to the terms of use and privacy policy.</p>
          </div>
        </div>
     </div> 
    </>
  )
}

export default LoginSignup
