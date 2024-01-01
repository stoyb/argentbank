import React from 'react'
import Account from '../../components/Account/Account'
import { fetchProfile } from '../../services/getProfile'
import styles from './Profile.module.css'

const User = () => {
  console.log(fetchProfile());
  return (
    <>
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