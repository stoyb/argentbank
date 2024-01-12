import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { editFirstName, editLastName } from "../../reducers/UpdateReducer";
import fetchProfileData from "../../services/fetchProfileData"




function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  console.log(state);
  const token = useSelector(state => state.auth.token)
  
  console.log(token);
  //Only when the token changes
  useEffect(() => {
    

    if (token) {
     async function fetchData() {
       const data = await fetchProfileData(token);
       dispatch(editFirstName(data.body.firstName));
       dispatch(editLastName(data.body.lastName));
     }
     fetchData()
    }
  }, [dispatch, token]);

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
