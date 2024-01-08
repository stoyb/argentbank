import React from 'react'
import { useState, useEffect } from 'react'
import Account from '../../components/Account/Account'
import styles from './Profile.module.css'
import { editFirstName, editLastName } from '../../reducers/UpdateReducer'
import { useDispatch, useSelector } from 'react-redux'


const Profile = () => {
  const userFirstName = useSelector(state => state.update.firstName);
  const userLastName = useSelector(state => state.update.lastName);
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);
  const [form, setForm] = useState(null);
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  //console.log(token);

  //console.log(firstName, lastName);
  useEffect(()=> {
    setFirstName(userFirstName);
    setLastName(userLastName);
  }, [userFirstName, userLastName]);
   function handleSubmit(event) {
     event.preventDefault()
    async function fetchUserData(){
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "PUT",
          headers: {
           "Authorization" : "Bearer " + token,
           "Content-Type": "application/json"
          },
          body: JSON.stringify({ firstName: firstName, lastName: lastName})
      });
      const result = await response.json();
      console.log(result)
    }
    fetchUserData()
    
    dispatch(editFirstName(firstName))
    dispatch(editLastName(lastName))
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