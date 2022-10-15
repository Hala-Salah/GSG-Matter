import React from "react";
import styles from "./styles.module.css";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h1 className={styles.sectionTitle}>{title}</h1>
    </>
  );
};

export default SectionTitle;
