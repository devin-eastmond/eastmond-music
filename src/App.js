import './styles/App.css';
import {Outlet} from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer";

const App = () => {
  return <><Navbar/><Outlet/><Footer/></>
};

export default App;
