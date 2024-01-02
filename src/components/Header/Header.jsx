import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import styles from './Header.module.css'
import logoUser from '../../assets/circle-user-solid.svg'
import logoRight from '../../assets/right-from-bracket-solid.svg'
import logoSignIn from "../../assets/circle-user-solid.svg"
import { fetchProfile } from '../../services/getProfile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [firstName, setFirstName] = useState('');
  const dispatch = useDispatch()
  useEffect(() => {
    fetchProfile()
     .then (res => {
       setFirstName(res.firstName)
     })
      .catch(error => {
        console.error(error);
  })}, []);
  if(firstName) {
    dispatch(setFirstName(firstName))
  }
  return (
    <>
    <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
            <Link to="/">
                <img src={logo} alt="Argent Bank" className={styles.logo}/>
                <h1 className={styles.deleteItem}>Argent Bank</h1>
            </Link>
            { firstName ? (
            <div className={styles.mainNav}>
          <Link to="/profile" className={styles.mainNavItem}>
          <img src={logoUser} alt={firstName}/>
              {firstName}
          </Link>
          <Link to="/" className={styles.mainNavItem}>
            <img src={logoRight} alt="Sign Out"/>
              Sign Out
          </Link>
        </div>
            ) : (
            <Link to="/login" className={styles.signInContainer}>
              <img src={logoSignIn} alt="Sign In"/>
              Sign In
            </Link>
            )}
        </nav>
    </header>
    </>
  )
}

export default Header