import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/circle-user-solid.svg'
import styles from './Login.module.css'

const Login = () => {
  return (
    <>
    <main className={styles.loginMain}>
    <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
        <img className={styles.loginImg} src={logo} alt="Login"/>
        <h2 className={styles.loginTitle}>Sign In</h2>
        <form>
            <div className={styles.inputWrapper}>
                <label className={styles.inputWrapperLabel} for="username">Username</label>
                <input className={styles.inputWrapperInput} type="text" id="username"/>
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.inputWrapperLabel} for="password">Password</label>
                <input className={styles.inputWrapperInput} type="password" id="password"/>
            </div>
            <div className={styles.inputRemember}>
                <input type="checkbox" id="remenber-me"/>
                <label className={styles.inputRememberLabel} for="remember-me">Remember me</label>
            </div>
            <Link to="#" className={styles.buttonSignIn}>Sign In</Link>
        </form>
        </div>
    </section>
    </main>
    </>
  )
}

export default Login