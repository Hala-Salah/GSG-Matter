import React from "react";
import DateTitle from "../DateTitleComponent";
import styles from "./styles.module.css";
const rightTopData = [
  {
    date: "FIELDTESTED · JANUARY 19, 2017",
    title: "Kérastase: A Collaboration",
    imgSrc: "./assets/images/Explore/Ex2.png",
    imgTF: true,
  },
  {
    date: "FIELDTESTED · JANUARY 19, 2017",
    title: "Jaclynn Seah",
    description:
      "Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.",
    imgTF: false,
  },
];
const rightDownData = [
  {
    date: "FIELDTESTED · JANUARY 19, 2017",
    title: "Remarkable Resilience: Grace Kim",
    description:
      "A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
    imgTF: false,
  },
  {
    date: "FIELDTESTED · JANUARY 19, 2017",
    title: "Remarkable Resilience: Grace Kim",
    imgSrc: "./assets/images/Explore/Ex3.png",
    imgTF: true,
  },
];

const RightExploreSection = () => {
  return (
    <div className={styles.rightFlex}>
      <div className={styles.rightTop}>
        {rightTopData.map((top) => {
          return (
            <div className={styles.rightSection}>
              <DateTitle {...top} />
            </div>
          );
        })}
      </div>
      <div className={styles.rightTop}>
        {rightDownData.map((top) => {
          return (
            <div className={styles.rightSection}>
              <DateTitle {...top} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightExploreSection;
