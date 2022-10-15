import React from "react";
import styles from"./styles.module.css";
import Information from "./Information";
import SectionTitle from "../SectionTitle";
export const AboutMatter = () => {
  return (
    <>
    <SectionTitle title="About Matter"/>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutPhoto}>
          <img className={styles.photo} src="./assets/images/about.png" alt="" />
        </div>
        <div className={styles.rightSide}>
          <Information/>
        </div>
      </div>
    </>
  );
};

export default AboutMatter;
