import { useState } from "react";
import {Link} from "react-router-dom";

export const Title=()=>{
    return(
        <a href="/">
        <img className="logo"
        alt="logo" 
        src="https://images.all-free-download.com/images/thumbjpg/sport_logo_modern_elegant_clean_design_6935390.jpg" />
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
       <Link to="/"><li>Home</li></Link>
       <Link to="/about"><li>About Us</li></Link>  
       <Link to="/"><li>Cart</li></Link>  
       <Link to="/contact"><li>Contact</li></Link>  

    </ul>
    </div>
    {isLoggedIn ? (
    <button onClick={()=>setisLoggedIn(false)}>Logout</button>): 
    <button onClick={()=>setisLoggedIn(true)}>Login </button>}
    </div>
    )
    }

export default Header;