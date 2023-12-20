import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import styles from './Header.module.css'

const Header = ({children}) => {
  return (
    <>
    <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
            <Link to="/">
                <img src={logo} alt="Argent Bank" className={styles.logo}/>
                <h1 className={styles.deleteItem}>Argent Bank</h1>
            </Link>
            {children}
        </nav>
    </header>
    </>
  )
}

export default Header