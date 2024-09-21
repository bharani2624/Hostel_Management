import React from "react";
import { useNavigate } from "react-router-dom";
import './AfterLogin.css'
const AfterLogin=()=>
{
    const history=useNavigate();
    const gohostel=()=>
        {
            history('/Hostel_Booking')
        }
    return(
        
        <div onClick={gohostel} className="afterContainer w-screen h-screen flex items-center space-x-2">
        <div className="cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">
            HostelBooking
        </div>
        <div className="cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">
            Query
            <img alt="" />
        </div>
        <div className="cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200" >
            VacancyDetails
        </div>
        </div>
    )   
}
export default AfterLogin;