import React, { useState } from "react";
import ShowMoreBttn from "../../../ShowMoreBttn";
import styles from "./styles.module.css";
import { BsQuestionSquare } from 'react-icons/bs';


const CountSection = () => {
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter > 1 ? counter - 1 : counter);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnWrapper}>
          <button onClick={handleDecrement} className={styles.btn}>
            -
          </button>
          <i className={styles.btn2} style={{ backgroundColor: "white" }}>
            {counter}
          </i>
          <button onClick={handleIncrement} className={styles.btn}>
            +
          </button>
        </div>

        <div className={styles.add}>
          <ShowMoreBttn buttonName={"ADD TO CART"}/>
        </div>
<BsQuestionSquare className={styles.question}/>
        <div className={styles.add2}>
          <button className={styles.wishlist}> ADD TO WISHLIST</button>
        </div>
      </div>
    </>
  );
};

export default CountSection;
