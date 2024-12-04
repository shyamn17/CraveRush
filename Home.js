import React from "react";
import ReactDOM from "react-dom/client";
const Title=()=>{
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
const AppComponent=()=>{
    return(
    <React.Fragment>
       <Header/> 
       <Body />
       <Footer />
    </React.Fragment>
    )
}

const Racket={
    image: "https://courtsidetennis.com/cdn/shop/articles/Untitled-1.png?v=1664521489",
    name: "Badminton",
    brand: "yonex",
    ratings: "4.2"
}

const Items=()=>{
    return(
        <div className="card">
        <img src={Racket.image}></img>
        <h2>{Racket.name}</h2>
        <h3>{Racket.brand}</h3>
        <h4>{Racket.ratings}</h4>
        </div>
    )
}

const Body=()=>{
    return(
      <div  className="lists">
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
      </div>
    )
}
const Footer=()=>{
    return(
        <h1>footer</h1>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);