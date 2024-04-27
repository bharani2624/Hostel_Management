import React from 'react'
import { Route,Routes,useLocation,Router } from 'react-router-dom';
import Login_Signup from '../Components/Login_Signup/Login_Signup';
import Hostel_Booking from '../Components/Hostel_Booking/Hostel_Booking';
import Hostel_Booking_Floors from '../Components/Hostel_Booking/Hostel_Booking_Floors';
import Hostel_Booking_rooms from '../Components/Hostel_Booking/Hostel_Booking_rooms';
import Login from '../Components/Login_Signup/Login'
import {AnimatePresence} from 'framer-motion'

function AnimatedRoute() {
    const location=useLocation();
  return (
 <AnimatePresence>
     <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Login/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Login_signup' element={<Login_Signup/>}/>
        <Route path='/Hostel_Booking' element={<Hostel_Booking/>}/>
        <Route path='/Hostel_Booking_Floors' element={<Hostel_Booking_Floors/>}/>
        <Route path='/Hostel_Booking_rooms' element={<Hostel_Booking_rooms/>}/>
      </Routes>
 </AnimatePresence>

  )
}

export default AnimatedRoute