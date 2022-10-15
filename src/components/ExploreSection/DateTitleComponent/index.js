import React from "react";
import styles from "./styles.module.css";

const DateTitle = ({ date, title ,description , imgSrc , imgTF}) => {
  return (
    <>
      {" "}
      <p className={styles.exploreDate}>{date}</p>
      <h1 className={styles.exploreTitles}>{title}</h1>
      <p className={styles.ExploreDes}>{description}</p>
      {imgTF?<div> <img className={styles.imageSrc} src={imgSrc} alt="" /></div>:""}
      
      

    </>
  );
};

export default DateTitle;
