import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login_Signup from './Components/Login_Signup/Login_Signup';
import Hostel_Booking from './Components/Hostel_Booking/Hostel_Booking';
import Hostel_Booking_Floors from './Components/Hostel_Booking/Hostel_Booking_Floors';
import Hostel_Booking_rooms from './Components/Hostel_Booking/Hostel_Booking_rooms';
function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Login_Signup/>}/>
  <Route path='/Hostel_Booking' element={<Hostel_Booking/>}/>
  <Route path='/Hostel_Booking_Floors' element={<Hostel_Booking_Floors/>}/>
  <Route path='/Hostel_Booking_rooms' element={<Hostel_Booking_rooms/>}/>
</Routes>
    </div>
  );
}

export default App;
