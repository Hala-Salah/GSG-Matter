import React from "react";
import SectionTitle from "../SectionTitle";
import styles from "./styles.module.css";

const videosData = [
  { title: "Jamdani", imgSrc: "assets/images/videos/video1.png" },
  {
    title: "Lorem ipsum dolor sit amet",
    imgSrc: "assets/images/videos/video2.png",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    imgSrc: "assets/images/videos/video3.png",
  },
];
const Videos = () => {
  const [...videoItems] = videosData;
  
  return (
    <>
      <SectionTitle title={"Recommended Videos"} />
      <div className={styles.containerVideo}>
        {videoItems.map((video) => {
          return (
            <div className={styles.videoItem}>
              <div className={styles.videoImage}>
                <img className={styles.img} src={video.imgSrc} alt="" />
              </div>
              <p>{video.title}</p>
              <div className={styles.playVideo}></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Videos;
