import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
    <section className={styles.heroContainer}>
    <div className={styles.heroContent}>
        <p className={styles.subtitle}>No fees.</p>
        <p className={styles.subtitle}>No minimum deposit.</p> 
        <p className={styles.subtitle}>High interest rates.</p>
        <p className={styles.text}>Open a savings account with Argent Bank today!</p>
    </div>
    </section>
   </>
  )
}

export default Hero