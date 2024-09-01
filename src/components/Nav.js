import React, {useEffect, useState} from 'react'
import "./Nav.css"

export default function Nav() {
   const [show, setShow]= useState(false);

   useEffect(()=> {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        
         setShow(true);
      } else {
        setShow(false);
      }
    })
    return () => {
       window.removeEventListener("scroll", () => {})
    }
   }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png"
        className="nav_logo" onClick={() => window.location.reload()}
      />
      <img 
        alt="User logged"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&s"
        className="nav_avatar"
      />
    </nav>
  )
}