import React, { useState } from 'react'
import nameimg from '../Assets/name.png'
import emailimg from '../Assets/email.png'
import passwordimg from '../Assets/password.png'
import { useNavigate } from 'react-router-dom';
import './Login_Signup.css'
import { motion } from 'framer-motion'
import axios from 'axios'

export let email_new = ""
export let _id_new = ""
const Login_Signup = () => {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [name, setName] = useState('');
    const roomNumber = 10;

    const redirectToHostel = () => {

        history('/AfterLogin')

    }

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", { name, email, password, roomNumber })
            .then(result => {
                console.log(result)
                if (result.data === "Account Already Existing") {

                    alert("Account Already Existing")

                }
                else {
                    setIsSignedin(true)
                    alert("Account created successfully")
                }
            })
            .catch(err => console.log(err))
    }


    const handleSignIn = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(user => {
                if (user.data == password) {
                    console.log(user.data)
                    email_new = email
                    _id_new = user.data
                    redirectToHostel();
                }
                else {
                    alert("Invalid Credentials");
                }
            })
    }



    const [isSignedin, setIsSignedin] = useState(false);
    const handleSignedIn = () => {
        setIsSignedin(false);
    }
    const handleSignedOut = () => {
        setIsSignedin(true);
    }

    const sign = isSignedin ? 'SignIn' : 'SignUp';
    return (
        <motion.div className="container-signup"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
        >
            <div className="header">
                <div className="Signup">{sign}</div>
                <div className="underline-login"></div>
            </div>
            <div className="inputs flex">
                {isSignedin ? <motion.div
                    animate={{ x: [0, 100, 0] }}></motion.div> : <div className="input flex">
                    <img className="w-8" src={nameimg} alt="" height={10} />
                    <div><input type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /></div>
                </div>}


                <div className="input flex">
                    <img className='w-8' src={emailimg} alt="" height={15} />
                    <div><input type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                </div>
                <div className="input flex">
                    <img className='w-8' src={passwordimg} />
                    <div>
                        <input type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassowrd
                            (e.target.value)} />
                    </div>
                </div>
                {isSignedin ? <div className="footer"><div className="Submit" onClick={handleSignIn} ><span>SignIn</span></div></div> : <div className="footer"><div className="Submit" onClick={handlesubmit} ><span>SignUp</span></div></div>}
                {isSignedin ? <div className="fp-footer">Don't Have An Account? <span onClick={handleSignedIn}><u>Click Here</u></span></div> : <div className="fp-footer">Already Have An Account? <span onClick={handleSignedOut}><u>Click Here</u></span></div>}
            </div>
        </motion.div>
    )

}

export default Login_Signup