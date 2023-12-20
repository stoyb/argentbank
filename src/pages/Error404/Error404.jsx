import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NavItem from '../../components/NavItem/NavItem'
import styles from './Error404.module.css'
import logoSignIn from "../../assets/circle-user-solid.svg"

const Error404 = () => {
  return (
    <>
    <Header>
      <Link to="/login" className={styles.signInContainer}>
        <NavItem logo={logoSignIn} paragraph="Sign In"/>
      </Link>
    </Header>
    <main>
      <p>Sorry, an unexpected error has occurred.</p>
    </main>
    </>
  )
}

export default Error404