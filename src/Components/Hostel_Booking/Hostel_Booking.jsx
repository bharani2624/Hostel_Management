import React from 'react'
import saphhire from '../Assets/Sapphire.png'
import emerald from '../Assets/emerald.png'
import ruby from '../Assets/ruby.png'
import coral from '../Assets/coral.png'
import pearl from '../Assets/pearl.png'
import './Hostel_Booking.css'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
const Hostel_Booking = () => {
    const navigate=useNavigate();
    const redirect=()=>{
        navigate('/Hostel_Booking_Floors');
    }
  return (
    <motion.div className="container-hostel">
        <div className="hostels">
            <motion.div className="hostel"  initial={{ y: "100%" }}
        animate={{ y:"0%" }}
        transition={{ delay: 0.3 }}
        onClick={redirect}
        >
                <img src={saphhire} alt="" />
               
                   
            </motion.div>
            <motion.div className="hostel"   initial={{ y: "100%" }}
        animate={{ y:"0%" }}
        transition={{ delay: 0.2 }}
        onClick={redirect}
        >
                <img src={emerald} alt="" />
            </motion.div>
            <motion.div className="hostel"   initial={{ y: "100%" } }    transition={{ delay: 0.2 }}
        animate={{ y:"0%" }} onClick={redirect}>
                <img src={ruby} alt=""/>

            </motion.div>
            <motion.div className="hostel"   initial={{ y: "100%" }}
        animate={{ y:"0%" }}     transition={{ delay: 0 }} onClick={redirect}>
                <img src={pearl} alt=""/>
            </motion.div>
            <motion.div className="hostel"   initial={{ y: "100%" }}
        animate={{ y:"0%" }} onClick={redirect}>
               <span id='coral'> <img src={coral} alt=""/></span>
            </motion.div>
        </div>
    </motion.div>
  )
}
export default Hostel_Booking
