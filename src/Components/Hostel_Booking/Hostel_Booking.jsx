import React from 'react'
import saphhire from '../Assets/Sapphire.png'
import emerald from '../Assets/emerald.png'
import ruby from '../Assets/ruby.png'
import coral from '../Assets/coral.png'
import pearl from '../Assets/pearl.png'
import './Hostel_Booking.css'
const Hostel_Booking = () => {
  return (
    <div className="container">
        <div className="hostels">
            <div className="hostel">
                <img src={saphhire} alt="" />
                <div className="overlay">
                    <span><u>Book</u></span>
                    </div>
                
            </div>
            <div className="hostel">
                <img src={emerald} alt="" />
            <div className="overlay"><span><u>Book</u></span></div>
            </div>
            <div className="hostel">
                <img src={ruby} alt=""/>
               <div className="overlay"><span><u>Book</u></span></div>

            </div>
            <div className="hostel">
                <img src={pearl} alt=""/>
                <div className="overlay"><span><u>Book</u></span></div>
            </div>
            <div className="hostel">
               <span id='coral'> <img src={coral} alt=""/></span>
               <div className="overlay" ><span><u>Book</u></span></div>
            </div>
        </div>
    </div>
  )
}
export default Hostel_Booking
