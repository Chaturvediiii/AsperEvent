import "./App.css";
import { ReactDOM } from "react"; 
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Team from "./components/Team";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Event/>
      <Cards/>
      <Register/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
