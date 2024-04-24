import React from 'react'
import saphhire from '../Assets/Sapphire.png'
import './Hostel_Booking.css'
const Hostel_Booking = () => {
  return (
    <div className="container">
        <div className="hostels">
            <div className="hostel">
                <img src={saphhire} alt="" />
                <div className="overlay">
                    <span>Sapphire</span>
                    </div>
                
            </div>
            <div className="hostel">
                <img src={saphhire} alt="" />
            <div className="overlay"><span>Emerald</span></div>
            </div>
            <div className="hostel">
                <img src={saphhire} alt=""/>
               <div className="overlay"><span>Ruby</span></div>

            </div>
            <div className="hostel">
                <img src={saphhire} alt=""/>
                <div className="overlay"><span>Pearl</span></div>
            </div>
            <div className="hostel">
               <span id='coral'> <img src={saphhire} alt=""/></span>
               <div className="overlay"><span>Coral</span></div>
            </div>
        </div>
    </div>
  )
}

export default Hostel_Booking
