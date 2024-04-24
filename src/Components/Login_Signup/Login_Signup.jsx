import React, { useState } from 'react'
import name from '../Assets/name.png' 
import email from '../Assets/email.png'
import password from '../Assets/password.png'
import './Login_Signup.css'
import { auth } from './firebase.js';
const Login_Signup = () => {

    const [isSignedin,setIsSignedin]=useState(false);
    const handleSignedIn=()=>
    {
        setIsSignedin(true);        
    }
    const handleSignedOut=()=>{
        setIsSignedin(false);
    }

    const sign=isSignedin?'SignIn':'SignUp';
  return (
    <div className="container">
        <div className="header">
            <div className="Signup">{sign}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {!isSignedin?(<div className="input" >
                <img src={name} alt="" height={15}/>
                <input type="text" placeholder='Name'/>
            </div>):(<div></div>)}
            <div className="input">
                <img src={email} alt="" height={15}/>
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password} alt="" height={15}/>
                <input type="password" placeholder='Password'/>
            </div>
            <div className="footer">
                <div className="Submit" onClick={handleSignedOut}><span>SignUp</span></div>
                <div className="signIn" onClick={handleSignedIn}><span>SignIn</span></div>
            </div>
        {isSignedin?(<div className="fp">Forgot Password <span><u>Click Here</u></span></div>):(<div></div>)}
        </div>
    </div>
  )
}

export default Login_Signup