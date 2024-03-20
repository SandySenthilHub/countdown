import React from 'react'
import css from "./Footer.module.css"
import Insta from "../../assets/instagram 1.svg"
import Whatsapp from "../../assets/phone.svg"
import Mail from "../../assets/Email.svg"


const Footer = () => {


  // const phoneNumber = '+918877880101'; // Replace with the desired phone number
  // const message = 'Hello.....'; // Replace with your message

  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <div className={css.left}>
          {/* <span>©batcave2023</span>  */}

        </div>

        {/* <div className={css.middle}>hi</div> */}


        <div style={{paddingBottom:"20px"}}>
          <a href="https://www.instagram.com/batcave.club?igsh=MTF5MmV2N2RjNG56cg==" target="_blank" rel="noopener noreferrer">    <img src={Insta} alt="" /> </a>

          {/* <div className={css.tooltipcontainer}>
            <img onclick="window.open('tel:+91 8877880101');" className={css.phone} src={Phone} alt="" />
            <span className={css.tooltip}>+91 8877880101</span>
            </div> */}
          {/* <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"> */}

          {/* </a> */}

          <a href="tel:7550057267"><img src={Whatsapp} alt="" /></a>

          <a href="mailto: info@batcave.club">    <img src={Mail} alt="" /> </a>

        </div>
      </div>

    </div>
  )
}

export default Footer
