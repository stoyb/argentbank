import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { editFirstName, editLastName } from "../../reducers/UpdateReducer";


function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  console.log(state);
  const token = useSelector(state => state.auth.token)
  console.log(token);
  //Only when the token changes
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Authorization" : "Bearer " + token
          }
        });

        const result = await response.json();
        console.log(result);

        dispatch(editFirstName(result.body.firstName));
        dispatch(editLastName(result.body.lastName));
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchToken();
    }
  }, [token]);

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
