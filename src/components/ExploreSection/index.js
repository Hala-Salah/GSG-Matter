import React from 'react'
import styles from './styles.module.css'
import SectionTitle from '../SectionTitle'
import LeftExploreSection from './LeftSection'
import RightExploreSection from './RightSection'
import ShowMoreBttn from '../ShowMoreBttn'

const ExploreSection = () => {
  return (
    <div className={styles.mainContainer}>
    <SectionTitle title={"Explore"}/>
    <div className={styles.exploreMainContainer}>
      <LeftExploreSection/>
      <RightExploreSection/>
    </div>
    <ShowMoreBttn buttonName={"See the journal"}/>

    </div>
  )
}

export default ExploreSection