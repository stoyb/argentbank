import React from 'react'
import logo from '../../assets/circle-user-solid.svg'
import styles from './Login.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../reducers/LogginReducer'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeCheckbox = () =>  {
    setRememberMe(!rememberMe)
  }  
  
  if(rememberMe){
    console.log( "Remembering done" + rememberMe);
    localStorage.setItem('usernameItem', username);
    localStorage.setItem('passwordItem', password);
    const rememberedUsername = localStorage.getItem('usernameItem')
    const rememberedPassword = localStorage.getItem('passwordItem')
    console.log("Username : " + rememberedUsername + " Password : " + rememberedPassword)
    
  }
//   useEffect(()=> {
     
//       if(rememberedUsername && rememberedPassword){
//         setUsername(rememberedUsername)
//         setPassword(rememberedPassword)
//         setRememberMe(true)
//       }
//     }
// , [rememberMe, username, password])
  

  

  function handleSubmit(event) {
    event.preventDefault()

    async function fetchData() {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password: password })
      });
      const result = await response.json()
     
        if(response.status === 200) {
        dispatch(setToken(result.body.token))
        navigate('/profile')
        // if(rememberMe) {
        //   localStorage.setItem('usernameItem', username);
        //   localStorage.setItem('passwordItem', password);
        //   setUsername('');
        //   setPassword('');
        // }
        } else {
          setError(true)
          // setUsername('');
          // setPassword('');
        }
    }
    fetchData()
    
    
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