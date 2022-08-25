import "./App.css";
import { ReactDOM } from "react"; 
import Home from "./pages/Home";
import Events from "./pages/Events";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
 <Routes>
  <Route  path="/" element={ <Home/>}/>
  <Route exact path="/events" element={ <Events/>}/>
  <Route exact path="/register" element={ <Register/>}/>
</Routes>
</Router>
   
  );
}

export default App;
