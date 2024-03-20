import React, { useState, useEffect } from 'react'
import css from "./Countdown.module.css"

const Countdown = () => {

  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/count');
        const data = await response.json();
        setNewCount(data.count);
        // Initialize count with fetched count
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (count !== newCount) {
        setCount((prevCount) => prevCount + Math.sign(newCount - prevCount));
      }
    }, 1000);

    return () => clearInterval(id);
  }, [count, newCount]);

  const addCommas = (numberString) => {
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <div className={css.counter}>
          <div className={css.count}>{addCommas(String(count))}</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
