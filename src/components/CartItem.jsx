import { IMG_CDN } from "../Services/Endpoints";

const CartItem = ({
  name = "No Name", 
  description = "No Description", 
  imageId = "default-image.jpg", 
  price = 0,
}) => {
  const itemPrice = price / 100; // Convert from cents to rupees

  console.log("Rendered CartItem with:", { name, description, imageId, price });

  return (
    <div className="card">
      <img
        src={IMG_CDN + imageId}
        alt={name}
        className="w-full h-full object-cover"
      />
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h4>{itemPrice ? `₹ ${itemPrice.toFixed(2)}` : "₹ 0.00"}</h4>
    </div>
  );
};

export default CartItem;
