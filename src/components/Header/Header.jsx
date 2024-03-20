import React, { useState } from 'react'
import css from "./Header.module.css"
// import Logo from "../../assets/VectorBat.svg"
// import Logo from "../../assets/batmainlogo-withoutshadow.svg"
// import Logo from "../../assets/Frame 34539.svg"
import Logo from "../../assets/Header_new_1.svg"

import HeaderImg from "../../assets/Header.png"
// import HeaderImg from "../../assets/Frame-34539.svg"




import { Link, useLocation } from 'react-router-dom'


const Header = () => {
  const [state,setState]=useState(false) 
  const location = useLocation();

  let buttonContent, buttonLink;

  if (location.pathname === '/') {
   
    buttonLink = '/register';
  } else {
   
    buttonLink = '/';
  }


  const headerContent = location.pathname === '/' ? (
    <button className={css.registermainbtn}>register</button>
  ) : (
    <button className={css.registermainbtn2}>back to home</button>
  );

  const scrollDown=()=>{
    window.scrollY >= 1 ? setState(true) : setState(false);
  } 

  window.addEventListener('scroll',scrollDown)



  return (
    <div className={state? css.newcontainer: css.container}  >
        <div className={css.logo_container}>
         <img className={css.logo} src={Logo} alt="" /> 
        </div>      
    </div>

  )
}

export default Header
