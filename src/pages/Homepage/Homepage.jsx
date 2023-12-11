import React from 'react'
import Hero from '../../components/Hero/Hero'
import HomeItemContainer from '../../components/HomeItemContainer/HomeItemContainer'
import styles from './Homepage.module.css'
import logoChat from '../../assets/icon-chat.png'
import logoMoney from '../../assets/icon-money.png'
import logoSecurity from '../../assets/icon-security.png'



const Homepage = () => {
  return (
    <>
    <Hero/>
    <section className={styles.homePageContent}>
    <h2 className={styles.deleteItem}>Features</h2>
      <HomeItemContainer logo={logoChat} legend="Chat Icon" title="You are our #1 priority" text=" Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
      <HomeItemContainer logo={logoMoney} legend="Money Icon" title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!"/>
      <HomeItemContainer logo={logoSecurity} legend="Security Icon" title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe."/>
    </section>
    </>
  )
}

export default Homepage