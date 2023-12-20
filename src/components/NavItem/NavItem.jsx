import React from 'react'
//import styles from './SignIn.module.css'

const SignIn = ({logo, paragraph}) => {
  return (
    <>
    <img src={logo} alt="SignIn"/> 
    {paragraph}
    </>
  )
}

export default SignIn