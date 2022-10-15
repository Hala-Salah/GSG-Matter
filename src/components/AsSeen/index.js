import React from 'react'
import SectionTitle from '../SectionTitle'
import styles from "./styles.module.css"
const AsSeenOn = () => {
  return (
    <><SectionTitle title={"As Seen On"}/>
    <div className={styles.SeenImage}>
        <img src="./assets/images/AsSeenOn.png" />
      </div></>
  )
}

export default AsSeenOn