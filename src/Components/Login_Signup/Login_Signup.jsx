import React, { useState } from 'react'
import nameimg from '../Assets/name.png'
import emailimg from '../Assets/email.png'
import passwordimg from '../Assets/password.png'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Login_Signup/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './Login_Signup.css'
import {motion, warning} from 'framer-motion'
import axios from 'axios'

const Login_Signup = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [name,setName]=useState('');
    const redirect=()=>{
        history('/Login');
    }
    const Submit = async (e) => {
        e.preventDefault();
    try{    const userCredential=await createUserWithEmailAndPassword(auth,email,password);
        const user=userCredential.user;
        await updateProfile(user,{
            displayName:name,
        });
    console.log(userCredential);
       redirect();
}
    catch(error){
        console.log(error);

    }
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/register",{name,email,password})
        .then(result=>{console.log(result)
            if(result.data=="Account Already Existing"){
                console.warn("Account Already Existing")
            }
        else{redirect()}})
        .catch(err=>console.log(err))
    }

    // const [isSignedin, setIsSignedin] = useState(false);
    // const handleSignedIn = () => {
    //     setIsSignedin(true);
    //     history('/Hostel_Booking');
    // }
    // const handleSignedOut = () => {
    //     setIsSignedin(false);
    // }

    // const sign = isSignedin ? 'SignIn' : 'SignUp';
    return (
        <motion.div className="container-signup"
    animate={{ x: [0, 100, 0] }}

        >
            <div className="header">
                <div className="Signup">SignUp</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
                    <img src={nameimg} alt="" height={15} />
                    <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>


                <div className="input">
                    <img src={emailimg} alt="" height={15} />
                    <input type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={passwordimg} alt="" height={15} />
                    <input type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassowrd
                        (e.target.value)} />
                </div>
                <div className="footer">
                    <div className="Submit" onClick={handlesubmit} ><span>SignUp</span></div>
                            </div>
               <div className="fp">Already Have An Account? <span onClick={redirect}><u>Click Here</u></span></div>
            </div>
        </motion.div>
    )

}

export default Login_Signup