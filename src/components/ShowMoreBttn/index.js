import React from "react";
import styles from "./styles.module.css";

const ShowMoreBttn = ({ buttonName }) => {
  return <button className={styles.ShowMore}>{buttonName}</button>;
};

export default ShowMoreBttn;
