import React from 'react'
import css from "./PageNotFound.module.css"
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className={css.container}>
        <div className={css.wrap}>
           <div className={css.div1}>
            <span>404</span>
            <span>Page Not Found</span>
            <span>We’re not able to find what you are looking for </span>
           </div>

           <div className={css.div2}>
        {/* <Link onClick={()=>window.scrollTo(0,0)} to ="/"> <button className={css.btohomebtn}>BACK TO HOME</button> </Link>     */}
            <span>Follow us on instagram to hop into our giveaway</span>
           
           </div>

            </div>
      
    </div>
  )
}

export default PageNotFound
