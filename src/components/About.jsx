import React, { useState } from 'react'
import {Outlet} from "react-router-dom"
import Profile from "./Profile"

const Section=({title,description})=>{
  const [isVisible, setIsvisible]=useState(false);
  return(
    <div className='border border-black p-2 m-2'>
      <h3>{title}</h3>
      {isVisible?(
      <button onClick={()=>setIsvisible(false)}>Hide</button>
      ) : (
      <button onClick={()=>setIsvisible(true)}>Show</button>
    )}
    {isVisible && <p>{description}</p> }
    </div>
  )
}

const About = () => { 
  return (
    <div>
      <h1>About Us</h1>
      <h1>FAQ</h1>
      <Section title={"How does CraveRush ensure the freshness of food during delivery?"} description={"We prioritize delivering fresh food! All orders are prepared fresh by our restaurant partners and packed in insulated bags to maintain temperature during delivery. Our optimized delivery network ensures that your food arrives hot and fresh, every time."}/>
      <Section title={"How can I track my order in real-time?"} description={"You can track your order live through the CraveRush app. Once your order is placed, you will receive real-time updates on your delivery status, including the location of your delivery person and the estimated arrival time."}/>
      <Section title={"What is CraveRush's refund policy for canceled or incorrect orders?"} description={"If your order is canceled due to an error on our end or the restaurant’s, we’ll issue a full refund. If the order is incorrect, we’ll correct it or provide a refund, depending on the situation. Refunds are processed to your original payment method or CraveRush wallet, typically within 5-7 business days."}/>    
      <Section title={"Can I use multiple promo codes or discounts on a single order?"} description={"Currently, CraveRush allows only one promo code or discount per order. However, you may still qualify for other offers, such as free delivery or cashback, which can be applied in addition to the promo code."}/>    
      <Section title={"How do I cancel my order or request a modification?"} description={"Orders can be canceled within a short time window, typically right after you’ve placed them. You can do this through the CraveRush app. Unfortunately, modifications to an order (like adding or removing items) can’t be made once the order is confirmed, but you can always reach out to customer support for assistance."}/>    
      <Section title={"What should I do if I’m charged incorrectly or notice an issue with my bill?"} description={"If you believe you've been charged incorrectly, please contact our customer support team immediately via the CraveRush app or website. We will review your order and issue a refund or adjustment if necessary. All charges, including taxes and delivery fees, are transparently displayed during checkout."}/>    
      <Section title={"How do I cancel my order or request a modification?"} description={"Orders can be canceled within a short time window, typically right after you’ve placed them. You can do this through the CraveRush app. Unfortunately, modifications to an order (like adding or removing items) can’t be made once the order is confirmed, but you can always reach out to customer support for assistance."}/>
      <Section title={"What safety measures are in place to ensure food hygiene?"} description={"All restaurant partners are required to follow strict hygiene and food safety standards. Packaging is carefully handled, and we also offer a 'No Contact Delivery' option for added safety. Our delivery staff adhere to hygiene protocols, including wearing masks and sanitizing their hands frequently."}/>
      <Section title={"What should I do if my order arrives late or in bad condition?"} description={"If your food arrives late or damaged, please contact our customer support team immediately through the CraveRush app. We’ll investigate the issue and offer a resolution, which may include a refund or credit to your account, depending on the situation."}/>
    </div>
  )
}

export default About;

// class About extends React.Component{
// constructor(props){
//   super(props);
//   this.state={
//     userInfo:{
//       name:"sample",
//       location:"abc"
//     }
//   }
// }

// async componentDidMount(){
//   const data=await fetch("https://api.github.com/users/akshaymarch7")
//   const json= await data.json();
//   this.setState({
//     userInfo:json,
//   })
// }

// render(){
//   return ( 
//   <div>
//   <h1>About Us</h1>
//   <h4>{this.state.userInfo.name}</h4>
//   <img src={this.state.userInfo.avatar_url}/>
//   <h4>{this.state.userInfo.location}</h4>
// <Profile/>
// <Section title={"FAQ"} />
// </div>
//   )
// }}

// export default About;