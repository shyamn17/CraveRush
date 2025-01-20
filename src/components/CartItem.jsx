 import {IMG_CDN}  from "../Services/Endpoints";

const CartItem = ({
  name,
  description,
  imageId,
  price,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN + imageId} />
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h4>{price/100}</h4>
    </div>
  );
};
export default CartItem ;
  