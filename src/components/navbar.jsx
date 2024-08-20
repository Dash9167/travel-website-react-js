import React, { useState } from "react";

const Navbar = () => {
    const [active,setactive]=useState(false);
 

    const show=()=>{
        if(active===true)
        {
            setactive(false)
        }
        
    }
    const Remove=()=>{
        if(active===false)
            {
                setactive(true)
            }
           
    }
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Travel</h1>
      </div>
      <div className={active? "active":"menu"}>
        <i onClick={Remove} className={active? "active":"fa fa-times-circle"} aria-hidden="true"></i>
        <ul>
          <li>Home</li>
          <li>Booking</li>
          <li>Search</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className={active? "menu-bar":"menu-bar "}>
        <i onClick={show} className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
};
export default Navbar;
