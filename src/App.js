import './styles/App.css';
import {Outlet} from "react-router-dom";
import Footer from "./components/footer";
import Menu from "./components/menu";


const App = () => {
  return <><Menu/><Outlet/><Footer/></>
};


export default App;
