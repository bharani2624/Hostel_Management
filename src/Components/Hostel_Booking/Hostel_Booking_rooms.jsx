// import React from 'react'
// import './Hostel_Booking_rooms.css'
// import room from '../Assets/room.png'
// import green from '../Assets/green.png'
// import red from '../Assets/red.png'
// import violet from '../Assets/violet.png'
// import { useState } from 'react'
// const Hostel_Booking_rooms = () => {
//   const[isbooked,setIsBooked]=useState(true);
//   const handleBooked=()=>{

//     setIsBooked(false);
//   }
//   return (
//     <div className="container">
//       <h1>Fisrt Floor</h1>
//       <ul>
//         <li>
//           <div className="available">
//             Rooms Available:100
//           </div>
//         </li>
//         <li>
//           <div className="available">
//             Rooms Booked:200
//           </div>
//         </li>
//       </ul>
//       <div className="room_container">

//         <div className="left">

//           <div className="left_wing">
//             <div className="room" onClick={handleBooked}>
//             <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room" id='1'>
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//            </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//          </div>

//          <div className="left_wing">
//             <div className="room">
//             <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//            </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//             <div className="room">
//           <img src={isbooked?red:green} alt="" />
//             </div>
//          </div>

//          <div className="left_wing">
//             <div className="room">
//             <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//            </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>

//           </div>
//           <div className="left_wing">
//             <div className="room">
//             <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//            </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>

//           </div>
//           <div className="left_wing">
//             <div className="room">
//             <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//            </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>

//           </div>
//           <div className="left_wing">
//             <div className="room">
//             <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//            </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>

//           </div>

//         </div>

//     <div className="right">
//       <div className="right_wing">
//       <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>

//       </div>
//       <div className="right_wing">
//       <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>

//       </div>
//       <div className="right_wing">
//       <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>

//       </div>
//       <div className="right_wing">
//       <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>

//       </div>
//       <div className="right_wing">
//       <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>

//       </div>
//       <div className="right_wing">
//       <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>
//             <div className="room">
//           <img src={room} alt="" />
//             </div>
//             <div className="room"><img src={room} alt="" />
//             </div>

//       </div>
//     </div>

















//       </div>
//     </div>
//   )
// }

// export default Hostel_Booking_rooms



import React, { useState } from 'react';
import './Hostel_Booking_rooms.css';
import room from '../Assets/room.png';
import green from '../Assets/green.png';
import red from '../Assets/red.png';
import {motion} from 'framer-motion';
import axios from 'axios';

const Hostel_Booking_rooms = () => {
  // Use an array of boolean states to track booking status for each room
  // const [roomStatus, setRoomStatus] = useState(Array(8).fill(true));

  // const handleBooked = (index) => {
  //   // Create a new array with the updated booking status for the clicked room
  //   const updatedRoomStatus = [...roomStatus];
  //   updatedRoomStatus[index] = !updatedRoomStatus[index];
  //   setRoomStatus(updatedRoomStatus);
  // };

  const [roomStatus, setRoomStatus] = useState(Array(50).fill(true))
  const [right_wing_roomStatus, right_wing_setRoomStatus] = useState(Array(50).fill(true));

  const handleBooked_right_wing = (index) => {
    const updatedRoomStatus = [...right_wing_roomStatus];
    updatedRoomStatus[index] = !updatedRoomStatus[index];
    right_wing_setRoomStatus(updatedRoomStatus);
  }

  const handleBooked = (i) => {
    const updatedRoomStatus = [...roomStatus];
    updatedRoomStatus[i] = !updatedRoomStatus[i];
    setRoomStatus(updatedRoomStatus);
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
