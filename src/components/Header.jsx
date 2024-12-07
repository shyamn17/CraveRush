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
    return(
        <div className="header">
        <Title />
    <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About US</li>
        <li>Cart</li>
        <li>Sign in</li>
    </ul>
    </div>
    </div>
    )
    }

export default Header;