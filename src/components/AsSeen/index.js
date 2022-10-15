import React from 'react'
import SectionTitle from '../SectionTitle'
import styles from "./styles.module.css"
const AsSeenOn = () => {
  return (
    <>
    <div className={styles.Wrap}>
    <SectionTitle title={"As Seen On"}/>
    <img className={styles.imageSeen }src="./assets/images/AsSeenOn.png" alt="logo" />
    </div></>
  )
}

export default AsSeenOn