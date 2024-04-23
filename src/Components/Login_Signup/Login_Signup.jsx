import React from 'react'
import name from '../Assets/name.png' 
import email from '../Assets/email.png'
import password from '../Assets/password.png'
import './Login_Signup.css'
const Login_Signup = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="Signup">Signup</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={name} alt="" height={15}/>
                <input type="text" />
            </div>
            <div className="input">
                <img src={email} alt="" height={15}/>
                <input type="email" />
            </div>
            <div className="input">
                <img src={password} alt="" height={15}/>
                <input type="password" />
            </div>
            <div className='Submit'>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Login_Signup