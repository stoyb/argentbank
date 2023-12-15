import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import SignIn from '../SignIn/SignIn'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
    <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
            <Link to="/">
                <img src={logo} alt="Argent Bank" className={styles.logo}/>
                <h1 className={styles.deleteItem}>Argent Bank</h1>
            </Link>
            <Link to="/login" className={styles.signInContainer}>
                <SignIn/>
            </Link>
        </nav>
    </header>
    </>
  )
}

export default Header