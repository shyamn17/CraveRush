import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";


const AppComponent=()=>{
    return(
    <React.Fragment>
       <Header /> 
       <Body />
       <Footer />
    </React.Fragment>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
