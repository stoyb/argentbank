import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
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
      fetchProfileData(token, dispatch);
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
