import React, { useState } from "react";
import ProductModal from "../ProductModal";
import styles from "./styles.module.css";


 
const ShowMoreBttn = ({ buttonName , productID}) => {
 
  const [showHide, setShowHide] = useState(false);
  
  const showHidden = (event) => {
    event.preventDefault();
        setShowHide(!showHide);
  };
  return (
    <>
      {showHide && <ProductModal productID={productID}/>}{
      }
      
      <button className={styles.ShowMore} onClick={showHidden}>
        {buttonName}
      </button>
      
    </>
  );
};

export default ShowMoreBttn;
