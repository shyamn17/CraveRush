import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../Redux/Slices/cartSlice";

const Cart=()=>{

const cartItems=useSelector((store)=>store.cart.items);

const dispatch=useDispatch();

const handleClearCart=()=>{
    dispatch(clearCart());
}

    return(
<div>
      <h1>Cart - {cartItems.length}</h1>
      <button className="bg-green-400 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button>
      {cartItems.map((item,index) => {
        return (
          <CartItem
            key={index} 
            name={item?.card?.info?.name}
            description={item?.card?.info?.description}
            imageId={item?.card?.info?.imageId}
            price={item?.card?.info?.price}
          />
        );
      })}
    </div>
    )
}

export default Cart;