import React from 'react'
import PriceAndRating from './PriceAndRating';
import styles from "./styles.module.css";
const RightModalSection = ({title , price , rating}) => {
  return (
    <div className={styles.rightContainer}>
        <h1 className={styles.productTitle}>{title}</h1>
       <PriceAndRating price={price} rating={rating} />
       <hr className={styles.hr}></hr>
    </div>
  )
}

export default RightModalSection