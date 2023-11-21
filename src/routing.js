import { Route, Router, Routes } from "react-router";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from './Components/Home';
import Services from './Components/Services';


const Routing = ()=>{

    return(
        <div>
     <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/contact" Component={Contact}></Route>
        <Route exact path="/about" Component={About}></Route>
        <Route exact path="/services" Component={Services}></Route>
        </Routes>
        </div>
    )
}

export default Routing;