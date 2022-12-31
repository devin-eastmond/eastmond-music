import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Outlet} from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header";


const App = () => {
  return (
      <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
  )
};


export default App;
