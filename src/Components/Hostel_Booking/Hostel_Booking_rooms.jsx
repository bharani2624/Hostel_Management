import React, { useState } from 'react';
import './Hostel_Booking_rooms.css';
import green from '../Assets/green.png';
import red from '../Assets/red.png';
import {motion} from 'framer-motion';
import {_id_new} from '../Login_Signup/Login_Signup'
import axios from 'axios';

const Hostel_Booking_rooms = () => {
  const [roomStatus, setRoomStatus] = useState(Array(100).fill(false))
  //const [right_wing_roomStatus, right_wing_setRoomStatus] = useState(Array(50).fill(false));
  const [room,setroom]=useState('')
  let id = _id_new;
  // const handleBooked_right_wing = (index) => {
  //   const updatedRoomStatusright = [...right_wing_roomStatus];
  //   updatedRoomStatusright[index] = !updatedRoomStatusright[index];
  //   console.log(updatedRoomStatusright)
  //   right_wing_setRoomStatus(updatedRoomStatusright);
  // }
  const handleBooked = (i) => {
    const updatedRoomStatus =Array(100).fill(false);
    updatedRoomStatus[i] =true;
    setRoomStatus(updatedRoomStatus);
    setroom(1+i);
  }

  const submit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3001/room_booking",{id,room})
    .then(student=>{
      if(student.data!=="Invalid"){
        console.log("Invalid")
    }
  else{
    console.log("success")
  }})

    .catch(err=>{console.log(err)})
  }


  return (
    <motion.div className="container"
    initial={{opacity:10 }}
    animate={{ x: 10 }}
    exit={{opacity:0,x:0}}
    >
      <div className="room_container">
        <div className="left">
          <div className="left_wing_text"><h2><center>Rooms</center></h2></div>
          <div className="left_wing">
            {roomStatus.map((isBooked, index) => (
              <div className="room" key={index} onClick={() => handleBooked(index)} value={room} onChange={(e)=>{setroom(e.target.value)}}>
                <img src={isBooked ? red : green} alt="" />
                <p>{index + 1}</p>
              </div>
            ))
            }
          </div>
        </div>
      </div>
      <div className="submit-btn" onClick={submit}>Submit</div>
       </motion.div>
  );
};

export default Hostel_Booking_rooms;
