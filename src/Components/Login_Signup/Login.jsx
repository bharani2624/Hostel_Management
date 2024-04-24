import React from 'react'
import './Login.css'
import email from '../Assets/email.png'
import password from '../Assets/password.png'

const Login = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="SignIn">SignIn</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
                <div className="input">
                    <img src={email} alt="" height={15}/>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src={password} alt="" height={15}/>
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="Login">
                <div className="login_btn">
                    <button type='submit'>Login
                    </button>
                </div>
            </div>
            </div>

    </div>
  )
}

export default Login