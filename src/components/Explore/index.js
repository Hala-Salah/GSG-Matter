import styles from "./styles.module.css";
import React from 'react'

const Explore_list=[
  
  {
    name:"FIELDTESTED.JANUARY 19, 2017",
    title2:"Kérastase: A Collaboration",
    image_src:"./assets/images/Explore/Ex2.png"
  },
  {
    name:"FIELDTESTED.JANUARY 19, 2017",
    title2:"Remarkable Resilience: Grace Kim",
    paragraph:"A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.",
    
  },
  {
    name:"FIELDTESTED.JANUARY 19, 2017",
    title2:"Jaclynn Seah",
    paragraph:"Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia. ",
  },
  {
    name:"FIELDTESTED.JANUARY 19, 2017",
    title2:"How To Wear The Lounge Lunghi",
    image_src:"./assets/images/Explore/Ex3.png"
  }
]

export const Explore = () => {
  const[...result]=Explore_list

  return (
    <div className={styles.mainExplore}>
      <div className={styles.exploreContainer}>
      <h1 className={styles.exploreH}>
      Explore
      </h1>
      <div className={styles.mainContent}>
        <div className={styles.rightExplore}>
        <p className={styles.name}>FIELDTESTED.JANUARY 19, 2017</p>
            <p className={styles.title}>Connected Clothing: Raye Padit</p>
            <p className={styles.paragraph}>As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. </p>
            <img className={styles.imageSrcFirst} src="./assets/images/Explore/Ex1.png" alt="Photo" />

        </div>
        <div className={styles.leftExplore}>

        {result.map((item)=>{
          return(
            <div className={styles.exploreTotal}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.titleSec}>{item.title2}</p>
            <p className={styles.paragraphSec}>{item.paragraph}</p>
            <img className={styles.imageSrcSc} src={item.image_src}  />
            </div>
          )
        })}



      </div>
      </div>
      <div className={styles.tap}>
         <button className={styles.showMoreIcon} href="#">SEE THE JOURNAL </button>
      </div>


      </div>
        
    </div>
  )
}

export default Explore