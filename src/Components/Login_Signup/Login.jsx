import React, { useState } from 'react'
import './Login.css'
import emailimg from '../Assets/email.png'
import passwordimg from '../Assets/password.png'
import { auth } from '../Login_Signup/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import axios from 'axios'
import Hostel_Booking_rooms from '../Hostel_Booking/Hostel_Booking_rooms'
const Login = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const redirect = () => {
        Navigate(`/Hostel_Booking`)
        console.log(email)
    }
    const redirect_hostel=()=>{
        Navigate('/Login_Signup')
    
    }
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                redirect('/Hostel_Booking')
            })
            .catch((error) => { console.log(error) })
            
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/login",{email,password})
        .then(result=>{
            if(result.data==="Success"){
                redirect()
            }
            else{
                alert("Ivalid Credentials")
            }

        })
        .catch(err=>console.log(err))

    }




    return (
        <motion.div className="container-Login"
        // initial={{opacity:10 , x: 0}}
        // animate={{ x: 10 }}
        // exit={{opacity:0,x:0}}
        animate={{ x: [0, 100, 0] }}
       >
        
            <div className="header-Login">
                <div className="SignIn">SignIn</div>
                <div className="underline"></div>

            </div>
            <div className="inputs-login">
                <div className="input-login">
                    <img src={emailimg} alt="" height={15} />
                    <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-login">
                    <img src={passwordimg} alt="" height={15} />
                    <input type="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="Login">
                    <div className="login_btn">
                        <button type='submit' onClick={handleSubmit}>Login
                        </button>
                    </div>
                </div>
            </div>
            <center>
                <div className="fp">Forgot Password? <span><u>Click Here</u></span></div>
            </center>
            <center>
                <div className="sp">Don't have an account? <span onClick={redirect_hostel}><u>Click Here</u></span></div>
            </center>



        </motion.div>
    )
}
export default Login