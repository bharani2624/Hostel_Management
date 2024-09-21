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
        const goquery=()=>
            {
                history('/Query')
            }
    return(
        
        <div  className="afterContainer w-screen h-screen flex items-center space-x-2">
        <div onClick={gohostel} className="cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">
            HostelBooking
        </div>
        <div onClick={goquery} className="cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">
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