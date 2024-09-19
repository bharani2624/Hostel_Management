import React from 'react'
import { Route,Routes,useLocation} from 'react-router-dom';
import Login_Signup from './Login_Signup/Login_Signup';
import Hostel_Booking from './Hostel_Booking/Hostel_Booking';
import Hostel_Booking_Floors from './Hostel_Booking/Hostel_Booking_Floors';
import Hostel_Booking_rooms from './Hostel_Booking/Hostel_Booking_rooms';
import Login from './Login_Signup/Login'
import AfterLogin from './AfterLogin/AfterLogin';
import {AnimatePresence} from 'framer-motion'

function AnimatedRoute() {
    const location=useLocation();
  return (
 <AnimatePresence>
     <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Login_Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Login_Signup' element={<Login_Signup/>}/>
        <Route path='/AfterLogin' element={<AfterLogin/>}/>
        <Route path='/Hostel_Booking' element={<Hostel_Booking/>}/>
        <Route path='/Hostel_Booking_Floors' element={<Hostel_Booking_Floors/>}/>
        <Route path='/Hostel_Booking_rooms' element={<Hostel_Booking_rooms/>}/>
      </Routes>
 </AnimatePresence>

  )
}

export default AnimatedRoute