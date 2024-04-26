import React from 'react'
import first from '../Assets/first_floor.png'
import second from '../Assets/second_floor.png'
import third from '../Assets/third_floor.png'
import './Hostel_Booking_Floors.css'
import Hostel_Booking_rooms from './Hostel_Booking_rooms'
import { useNavigate } from 'react-router-dom'
const Hostel_Booking_Floors = () => {
  const navigate=useNavigate();
  const redirection=()=>{
    navigate('/Hostel_Booking_rooms');
  }
  return (

    <div className="floors">
        <div className="floor">
            <img src={first} alt="" />
            <div className="overlay"><span onClick={redirection}><u>Book</u></span></div>           
        </div>
        <div className="floor">
            <img src={second} alt="" />
        <div className="overlay"><span onClick={redirection}><u>Book</u></span></div>
        </div>
        <div className="floor">
            <img src={third} alt=""/>
           <div className="overlay"><span onClick={redirection}><u>Book</u></span></div>
        </div>
    </div>

  )
}

export default Hostel_Booking_Floors