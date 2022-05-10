import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
    const[handleShow,setHandlShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
               setHandlShow(true)
            }else setHandlShow(false)
        });
       
    },[])
  return (
    <div className={`nav ${handleShow&&"nav_black"}`}>
     <img 
      className='nav__logo'
      src='http://www.tubefilter.com/wp-content/uploads/2016/07/Netflix_logo.jpg'
      alt='Netflix Logo'
     />
      <img 
      className='nav__avatar'
      src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
      alt='Netflix Logo'
     />
    </div>
  )
}

export default Nav