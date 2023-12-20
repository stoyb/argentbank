import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
//import styles from './App.module.css';


function App() {
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
