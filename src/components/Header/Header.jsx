import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import styles from './Header.module.css'
import logoUser from '../../assets/circle-user-solid.svg'
import logoRight from '../../assets/right-from-bracket-solid.svg'
import logoSignIn from "../../assets/circle-user-solid.svg"
import { useSelector } from 'react-redux'

const Header = () => {
  //const dispatch = useDispatch()
  // useEffect(() => {
  //   fetchProfile()
  //    .then (res => {
  //      setFirstName(res.firstName)
  //    })
  //     .catch(error => {
  //       console.error(error);
  // })}, []);
    //dispatch(setName(firstName))
const firstName = useSelector(state => state.update.firstName)
console.log(firstName);

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
              <span> {firstName}</span>
          </Link>
          <Link to="/" className={styles.mainNavItem}>
            <img src={logoRight} alt="Sign Out"/>
            <span> Sign Out</span>
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