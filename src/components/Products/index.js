import React from "react";
import ShowMoreBttn from "../ShowMoreBttn";
import styles from "./styles.module.css";

const Products = ({ id, title, price, imgSrc, newProduct }) => {
  return (
    <>
      <div className={styles.featuredItem}>
        <img className={styles.featuredImg} src={imgSrc} alt="Featured" />
        {newProduct ? <p className={styles.newFeature}>NEW</p> : ""}
        <div className={styles.showHideButton}>
          <ShowMoreBttn buttonName={"Quick View"} />
        </div>

        <div>
          <p className={styles.featuredDes}>{title}</p>
          <p className={styles.featuredPrice}>{price}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
