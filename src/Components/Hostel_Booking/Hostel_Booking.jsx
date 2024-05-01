import React from 'react'
import saphhire from '../Assets/Sapphire.png'
import emerald from '../Assets/emerald.png'
import ruby from '../Assets/ruby.png'
import coral from '../Assets/coral.png'
import pearl from '../Assets/pearl.png'
import './Hostel_Booking.css'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useParams } from 'react-router-dom';
import Login from '../Login_Signup/Login'
const Hostel_Booking = () => {
    const {email}=useParams();
    console.log(email);
    const navigate=useNavigate();
    const redirect=()=>{
        navigate('/Hostel_Booking_Floors');
    }
  return (
    <motion.div className="container-hostel"
    initial={{opacity:10 , x: 0}}
    animate={{ x: 10 }}
    exit={{opacity:0,x:0}}>
        <div className="hostels">
            <div className="hostel">
                <img src={saphhire} alt="" />
                <div className="overlay-hostel">
                    <span onClick={redirect}><u>Book</u></span>
                    </div>
                
            </div>
            <div className="hostel">
                <img src={emerald} alt="" />
            <div className="overlay-hostel"><span onClick={redirect}><u>Book</u></span></div>
            </div>
            <div className="hostel">
                <img src={ruby} alt=""/>
               <div className="overlay-hostel"><span onClick={redirect}><u>Book</u></span></div>

            </div>
            <div className="hostel">
                <img src={pearl} alt=""/>
                <div className="overlay-hostel"><span onClick={redirect}><u>Book</u></span></div>
            </div>
            <div className="hostel">
               <span id='coral'> <img src={coral} alt=""/></span>
               <div className="overlay-hostel" ><span onClick={redirect}><u>Book</u></span></div>
            </div>
        </div>
    </motion.div>
  )
}
export default Hostel_Booking
