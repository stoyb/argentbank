import React from 'react'
import { useState, useEffect } from 'react'
import Account from '../../components/Account/Account'
import styles from './Profile.module.css'
import { editFirstName, editLastName } from '../../reducers/UpdateReducer'
import { useDispatch, useSelector } from 'react-redux'
import changeProfileData from '../../services/changeProfileData'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const userFirstName = useSelector(state => state.update.firstName);
  const userLastName = useSelector(state => state.update.lastName);
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);
  const [form, setForm] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  // Sets firstname and lastname from the store
  useEffect(()=> {
    if(token == null){
      navigate('/login')
    }
    setFirstName(userFirstName);
    setLastName(userLastName);
  }, [token, navigate, userFirstName, userLastName]);
  // On submit, changes firstname and lastname values with inputs values and sends new values on the store
  function handleSubmit(event) {
    event.preventDefault()
    changeProfileData(token, firstName, lastName) // Changes data with token and inputs values 
    dispatch(editFirstName(firstName))
    dispatch(editLastName(lastName))
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