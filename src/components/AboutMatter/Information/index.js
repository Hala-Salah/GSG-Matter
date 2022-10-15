import React from "react";
import styles from "./styles.module.css";

export const Information = () => {
  const data = [
    {
      title: "ARTISAN EMPLOYMENT DAYS CREATED",
      infoItems: ["123456"],
    },
    {
      title: "COUNTRIES INVOLVED TO DATE",
      infoItems: ["India", "China", "Sri Lanka"],
    },
    {
      title: "#MATTERTRIBE",
      infoItems: ["12 designers", "12 Factories"],
    },
  ];
  const [...information] = data;
  return (
    <>
     <p className={styles.des}>
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities.
          </p>
      {information.map((item) => {
      
        return (
          <>
          
          <div className={styles.aboutInfo}>
            <p className={styles.moreInfoTitle}>{item.title}</p>
            {item.infoItems.map((more)=>{
             return<><p className={styles.moreInfo}>{more}</p></>
            })}
            
          </div>
          </>
        );
      })}
    </>
  );
};

export default Information;
