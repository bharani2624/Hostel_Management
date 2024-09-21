import React from "react";
import Popup from 'reactjs-popup';
const Query=()=>
    {
return(   
         <div className="query h-screen w-screen flex items-center space-x-2">
            {/* <Popup trigger={<button>open</button>} position={"right center"}>
            aghdfasgh
            <button>ahfhajf</button>
            </Popup> */}
           <Popup trigger={
                <div className="food cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">
                    Food
                </div>
            } position="top" modal>
                <div className="p-4 text-center text-lg font-semibold bg-white w-full h-full outline-none border rounded-lg shadow-xl">
                <textarea className="text-lg h-44 outline-none" type="text" placeholder="Enter Your Issue"/>
                <div className="submit bg-white cursor-pointer w-full">Submit</div>
                </div>
            </Popup>
             <div className="room cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">Room</div>
             <div className="hostel cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">Hostel</div>
             <div className="toilets cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">Toilets</div>
             <div className="others cursor-pointer bg-white w-full h-2/6 text-black font-bold text-4xl border rounded-lg flex items-center justify-center hover:bg-slate-200">Others..</div>

        </div>
        )
    }
export default Query;