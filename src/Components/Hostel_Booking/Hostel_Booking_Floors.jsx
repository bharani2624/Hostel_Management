import React from 'react'
import first from '../Assets/first_floor.png'
import second from '../Assets/second_floor.png'
import third from '../Assets/third_floor.png'
import './Hostel_Booking_Floors.css'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion';
const Hostel_Booking_Floors = () => {
  const navigate=useNavigate();
  const redirection=()=>{
    navigate('/Hostel_Booking_rooms');
  }
  return (
<div className="container-floors">
  
      <motion.div className="floors"
      >
          <motion.div className="floor" onClick={redirection} >
              <img src={first} alt="" />
          </motion.div>
          <motion.div className="floor" onClick={redirection} >
              <img src={second} alt="" />
          </motion.div>
          <motion.div className="floor" onClick={redirection} >
              <img src={third} alt=""/>
          </motion.div>
      </motion.div>
</div>
 
  )
}

export default Hostel_Booking_Floors