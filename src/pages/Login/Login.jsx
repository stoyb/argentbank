import React from 'react'
import logo from '../../assets/circle-user-solid.svg'
import styles from './Login.module.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../reducers/LogginReducer'
import axios from 'axios'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [data, setData]  = useState("");
  const dispatch = useDispatch()
  function handleSubmit(event) {
    event.preventDefault()
    async function fetchData() {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        username: username,
        password: password
      });
      setData(response)
    }
    fetchData()
    if(data) {
      dispatch(setToken(data))
    } else {
      setError(true)
    }
  }
  
  useEffect(() => {
   // GetToken.login 
  }, []); 
  return (
    <>
    <main className={styles.loginMain}>
    <section className={styles.loginSection}>
        <div className={styles.loginContainer}>
        <img className={styles.loginImg} src={logo} alt="Login"/>
        <h2 className={styles.loginTitle}>Sign In</h2>
        <form>
            <div className={styles.inputWrapper}>
                <label className={styles.inputWrapperLabel} htmlFor="username">Username</label>
                <input className={styles.inputWrapperInput} type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className={styles.inputWrapper}>
                <label className={styles.inputWrapperLabel} htmlFor="password">Password</label>
                <input className={styles.inputWrapperInput} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className={styles.inputRemember}>
                <input type="checkbox" id="remenber-me"/>
                <label className={styles.inputRememberLabel} htmlFor="remember-me">Remember me</label>
            </div>
            {error && <span>Le nom de l'utilisateur ou le mot de passe est incorrect</span>}
            <button onClick={handleSubmit} className={styles.buttonSignIn}>Sign In</button>
        </form>
        </div>
    </section>
    </main>
    </>
  )
}

export default Login