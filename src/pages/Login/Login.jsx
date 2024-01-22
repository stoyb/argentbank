import React from 'react'
import logo from '../../assets/circle-user-solid.svg'
import styles from './Login.module.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import  fetchLoginData  from '../../services/fetchLoginData'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Changes checkbox state
  const handleChangeCheckbox = () =>  {
    setRememberMe(!rememberMe)
  }  
  // When checkbox is true inputs value are on the local Storage 
  if(rememberMe){
    localStorage.setItem('usernameItem', username);
    localStorage.setItem('passwordItem', password);
  } 
  const rememberedUsername = localStorage.getItem('usernameItem')
  const rememberedPassword = localStorage.getItem('passwordItem')
  // Keeps local Storage values inside inputs 
  useEffect(()=> {
    if(rememberedUsername && rememberedPassword) {
      setUsername(rememberedUsername)
      setPassword(rememberedPassword)
      setRememberMe(true)
    } 
  }
  , [rememberedUsername, rememberedPassword])
  // On submit, fetches a token with username and password values 
  const handleSubmit = (event) => {
    event.preventDefault()
    fetchLoginData(username, password, setError, setUsername, setPassword, dispatch, navigate) // Fetches token 
    if(!rememberMe) {
      localStorage.removeItem('usernameItem');
      localStorage.removeItem('passwordItem');
    }
  }
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
                <input type="checkbox" checked={rememberMe} onChange={handleChangeCheckbox} id="remenber-me"/>
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