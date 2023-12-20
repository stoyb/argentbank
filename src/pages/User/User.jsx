import React from 'react'
import Account from '../../components/Account/Account'
import Header from '../../components/Header/Header'
import styles from './User.module.css'
import { Link } from 'react-router-dom'
import NavItem from '../../components/NavItem/NavItem'
import logoUser from '../../assets/circle-user-solid.svg'
import logoRight from '../../assets/right-from-bracket-solid.svg'

const User = () => {
  return (
    <>
      <Header>
        <div className={styles.mainNav}>
          <Link to="/login" className={styles.mainNavItem}>
            <NavItem logo={logoUser} paragraph=" Tony"/>
          </Link>
          <Link to="/" className={styles.mainNavItem}>
            <NavItem logo={logoRight} paragraph=" Sign Out"/>
          </Link>
        </div>
      </Header>
      <main className={styles.userMain}>
        <div className={styles.userContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Welcome back<br />Tony Jarvis!</h2>
          <button className={styles.editButton}>Edit Name</button>
        </div>
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
        </div>
      </main>
    </>
  )
}

export default User