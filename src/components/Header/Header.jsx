import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import styles from './Header.module.css'
import logoUser from '../../assets/circle-user-solid.svg'
import logoRight from '../../assets/right-from-bracket-solid.svg'
import logoSignIn from "../../assets/circle-user-solid.svg"
import { useSelector, useDispatch } from 'react-redux'
import { editFirstName } from '../../reducers/UpdateReducer'

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const state = useSelector(state => state.update.firstName)

  useEffect(() => {
    setFirstName(state)
  }, [state]);

  function logOut() {
    navigate('/')
    dispatch(editFirstName(null))
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
              <span>{firstName}</span>
          </Link>
          <button onClick={logOut} className={styles.mainNavItem}>
            <img src={logoRight} alt="Sign Out"/>
            <span> Sign Out</span>
          </button>
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