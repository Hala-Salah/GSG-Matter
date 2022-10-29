import React from "react";
import styles from "./styles.module.css";


const PriceAndRating = ({price, rating}) => {
  return (
    <div className={styles.priceRating}>
      <div>
        {" "}
        <p className={styles.price}>SGD {price}</p>
      </div>
      <div>
        {" "}
        <p className={styles.rating}>{rating} of 5</p>
      </div>
    </div>
  );
};

export default PriceAndRating;
