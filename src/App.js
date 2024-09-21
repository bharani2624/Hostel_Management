import './App.css';
import { Route,Routes,useLocation,BrowserRouter as Router } from 'react-router-dom';
import Login_Signup from './Components/Login_Signup/Login_Signup';
import Hostel_Booking from './Components/Hostel_Booking/Hostel_Booking';
import Hostel_Booking_Floors from './Components/Hostel_Booking/Hostel_Booking_Floors';
import Hostel_Booking_rooms from './Components/Hostel_Booking/Hostel_Booking_rooms';
import Login from './Components/Login_Signup/Login'
import AnimatedRoute from './Components/AnimatedRoute';
function App() {
  const location=useLocation();
  return (
    <div className="App">
<AnimatedRoute/>
    </div>
  );
}

export default App;
