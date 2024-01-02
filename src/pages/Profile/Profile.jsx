import React from 'react'
import { useState } from 'react'
import Account from '../../components/Account/Account'
import styles from './Profile.module.css'
//import axios from 'axios'
import { editFirstName, editLastName } from '../../reducers/UpdateReducer'
import { useDispatch } from 'react-redux'


const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [form, setForm] = useState(null);
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    // async function fetchData() {
    //   const response = await axios.put('http://localhost:3001/api/v1/user/profile', {
    //     firstName: firstName,
    //     lastName: lastName
    //   });
    //   setData(response)
    // }
    //  fetchData()
     dispatch(editFirstName(firstName))
     dispatch(editLastName(lastName))
    // if(data) {
    //   dispatch(setToken(data))
    // } else {
    //   setError(true)
    // }
    console.log(firstName, lastName);
    setForm(null)
  }
  return (
    <>
      <main className={styles.userMain}>
        <div className={styles.userContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Welcome back<br/>
           {firstName} {lastName}</h2>
           {!form && <button onClick={setForm} className={styles.editButton}>Edit name</button>}
           {form &&
          <form>
            <div>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              !
            </div>
            <button onClick={handleSubmit} className={styles.editButton}>Save</button>
          </form>
           }
        </div>
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
        </div>
      </main>
    </>
  )
}

export default Profile