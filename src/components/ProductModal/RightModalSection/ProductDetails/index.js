import React from "react";
import styles from "./styles.module.css";
const ModalProductDetails = ({ detailTitle, detailDes, buttonDes }) => {
  return (
    <div className={styles.details}>
      <h1 className={styles.detailTitle}>{detailTitle}</h1>
      <h1 className={styles.detailDes}>{detailDes}</h1>
    </div>
  );
};

export default ModalProductDetails;
