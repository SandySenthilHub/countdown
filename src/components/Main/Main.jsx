import React, { useState ,useEffect} from 'react'
import css from "./Main.module.css"
import Batcave from "../../assets/batcavetext.svg"
import backgroundImage from '../../assets/Countdown.png';
// import backgroundImage from '../../assets/Bg.png';

const Main = () => {

  const [imageLoaded, setImageLoaded] = useState(false);


  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  useEffect(() => {
    const image = new Image();
    image.src = backgroundImage;
    image.onload = handleImageLoad;
  }, []);


  return (
    <div onLoad={handleImageLoad} className={`${css.container} ${imageLoaded? css.loaded:""}`}>
        {/* <span className={css.bt}>batcave</span> */}
        {/* <div className={css.wrap}>
        <div className={css.div1}>
            <img src={Batcave} alt="" />
        </div>
        <div className={css.div2}>
            <span>left span</span>
            <span>Right span</span>
        </div>

        </div> */}
      
    </div>
  )
}

export default Main

