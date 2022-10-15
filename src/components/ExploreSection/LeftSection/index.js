import React from "react";
import DateTitle from "../DateTitleComponent";
import styles from "./styles.module.css";
const Data = [
  "FIELDTESTED  · JANUARY 19, 2017",
  "Connected Clothing: Raye Padit",
  "As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls.",
  "./assets/images/Explore/Ex1.png" , true
];
const LeftExploreSection = () => {
    const [exploreDate , title , description , imageSrc , imgTF] = Data
  return (
    <div className={styles.leftSection}>
      <DateTitle date={exploreDate} title={title} description={description}/>
      <div className={styles.leftExploreImage}><img className={styles.imgExplore} src={imageSrc} alt="" imgTF={imgTF} /></div>
    </div>
  );
};

export default LeftExploreSection;
