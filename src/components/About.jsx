import React from 'react'
import {Outlet} from "react-router-dom"
import Profile from "./Profile"
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//     </div>
//   )
// }

// export default About;

class About extends React.Component{
constructor(props){
  super(props);
  this.state={
    userInfo:{
      name:"sample",
      location:"abc"
    }
  }
}

async componentDidMount(){
  const data=await fetch("https://api.github.com/users/akshaymarch7")
  const json= await data.json();
  this.setState({
    userInfo:json,
  })
}

render(){
  return ( 
  <div>
  <h1>About Us</h1>
  <h4>{this.state.userInfo.name}</h4>
  <img src={this.state.userInfo.avatar_url}/>
  <h4>{this.state.userInfo.location}</h4>
<Profile/>
</div>
  )
}}

export default About;