import React from 'react'
import styles from './Account.module.css'

// Account container in Profile page
const Account = ({title, amount, description}) => {
  return (
    <>
    <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>{title}</h3>
          <p className={styles.accountAmount}>{amount}</p>
          <p className={styles.accountAmountDescription}>{description}</p>
        </div>
        <div className={styles.accountContentWrapperCTA}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
    </section>
    </>
  )
}

export default Account