import React, { useState } from 'react';
import './Hostel_Booking_rooms.css';
import green from '../Assets/green.png';
import red from '../Assets/red.png';
import {motion} from 'framer-motion';

const Hostel_Booking_rooms = (props) => {
  const [roomStatus, setRoomStatus] = useState(Array(50).fill(true))
  const [right_wing_roomStatus, right_wing_setRoomStatus] = useState(Array(50).fill(true));

  const handleBooked_right_wing = (index) => {
    const updatedRoomStatus = [...right_wing_roomStatus];
    updatedRoomStatus[index] = !updatedRoomStatus[index];
    console.log(updatedRoomStatus)
    right_wing_setRoomStatus(updatedRoomStatus);
  }

  const handleBooked = (i) => {
    const input = i;
    const updatedRoomStatus = [...roomStatus];
    updatedRoomStatus[i] = !updatedRoomStatus[i];
    setRoomStatus(updatedRoomStatus);
    console.log(input)
  }

  return (
    <motion.div className="container"
    initial={{opacity:10 }}
    animate={{ x: 10 }}
    exit={{opacity:0,x:0}}
    >
      <h1>First Floor</h1>
   <span className="available">Rooms Available:{roomStatus.filter((status) => status).length}</span>
      <div className="room_container">
        <div className="left">
          <div className="left_wing_text"><h2><center>Left Wing</center></h2></div>
          <div className="left_wing">
            {roomStatus.map((isBooked, index) => (
              <div className="room" key={index} onClick={() => handleBooked(index)}>
                <img src={isBooked ? red : green} alt="" />
                
                <p>{index + 1}</p>
              </div>
            ))
            }
          </div>
        </div>
        <div className="right">
          <div className="right_wing_text"><h2><center>Right Wing</center></h2></div>
          <div className="right_wing">
            {right_wing_roomStatus.map((isBooked_right, i) => (
              <div className="right_room" key={i} onClick={() => handleBooked_right_wing(i)}>
                <img src={isBooked_right ? red : green} alt="" />
                <p>{i + 46}</p>
                <script>

                </script>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hostel_Booking_rooms;
