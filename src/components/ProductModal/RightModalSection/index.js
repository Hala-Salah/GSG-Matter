import React from "react";
import CountSection from "./Counter";
import PriceAndRating from "./PriceAndRating";
import ModalProductDetails from "./ProductDetails";
import styles from "./styles.module.css";
const RightModalSection = ({
  title,
  price,
  rating,
  description,
  brand,
  category,
}) => {
  return (
    <div className={styles.rightContainer}>
      <h1 className={styles.productTitle}>{title}</h1>
      <PriceAndRating price={price} rating={rating} />
      <hr className={styles.hr}></hr>
      <>
        <h1 className={styles.desTitle}>Description</h1>
        <h1 className={styles.des}>{description}</h1>
      </>
      <hr className={styles.hr}></hr>

      <ModalProductDetails
        detailTitle={"Brand"}
        detailDes={brand}
        styleClass={"description"}
      />
      <hr className={styles.hr}></hr>
      <CountSection />
    </div>
  );
};

export default RightModalSection;
