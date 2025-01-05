import { useState } from "react";
import {Link} from "react-router-dom";
import "../../Home.css"

export const Title=()=>{
    return(
        <a href="/">
        <img className="logo"
        alt="logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicjVAlj83VbE9otiuKD1oF_JS1G_PHFxLOw&s" />
        </a>
    )
}

const Header=()=>{

const [isLoggedIn , setisLoggedIn]=useState(false);

    return(
        <div className="header">
        <Title />

    <div className="nav-items">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>  
    <li><Link to="/">Cart</Link></li>  
    <li><Link to="/contact">Contact</Link></li>  

    </ul>
    </div>
    {isLoggedIn ? (
    <button onClick={()=>setisLoggedIn(false)}>Logout</button>): 
    <button onClick={()=>setisLoggedIn(true)}>Login </button>}
    </div>
    )
    }

export default Header;