import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Redux/Slices/cartSlice";
import { IMG_CDN } from "../Services/Endpoints";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Initialize local state to track quantities
  const [quantityMap, setQuantityMap] = useState({});

  const handleClearCart = () => {
    dispatch(clearCart());
    setQuantityMap({});  // Reset quantities when cart is cleared
  };

  // Handle item removal from cart when quantity is zero
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
    const updatedQuantityMap = { ...quantityMap };
    delete updatedQuantityMap[itemId];
    setQuantityMap(updatedQuantityMap);
  };

  const increaseQuantity = (item) => {
    setQuantityMap((prevState) => ({
      ...prevState,
      [item?.id]: (prevState[item?.id] || 1) + 1,
    }));
  };

  const decreaseQuantity = (item) => {
    setQuantityMap((prevState) => {
      const currentQuantity = prevState[item?.id] || 1;
      if (currentQuantity > 1) {
        return {
          ...prevState,
          [item?.id]: currentQuantity - 1,
        };
      }
      handleRemoveItem(item?.id);
      return prevState;
    });
  };

  // Calculate total price
  const calculateTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      // Log the full item to see all properties
      console.log("Item Data:", item);
      
      // Ensure price is valid
      const price = item?.price || 0;
      const quantity = quantityMap[item?.id] || 1;

      // Log the price and quantity
      console.log("Price:", price, " Quantity:", quantity);

      // Calculate total if price is valid
      if (price && !isNaN(price)) {
        totalPrice += (price / 100) * quantity;
      } else {
        console.log("Invalid price detected for item", item);
      }
    });

    return totalPrice.toFixed(2); // Ensure the total price is a string with 2 decimal places
  };

  // Calculate the final price with delivery, platform fee, GST, etc.
  const totalPrice = calculateTotal();
  const deliveryCharge = 25;
  const platformFee = 6;
  const gst = cartItems.length > 0 ? (totalPrice * 0.05) : 0;
  const finalAmount = cartItems.length === 0 ? "0.00" : (parseFloat(totalPrice) + deliveryCharge + platformFee + gst - 30).toFixed(2);

  // Handle payment link click
  const handlePaymentLink = () => {
    window.open("https://razorpay.me/@shyam7164", "_blank");
  };

  return (
    <div className="bg-[#F7F9FB] min-h-screen py-10 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-8 flex">
        {/* Cart Items List */}
        <div className="w-2/3 pr-8">
          <div className="w-full p-8 bg-[#603F83FF] text-white rounded-lg mb-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">Your Cart - {cartItems.length} Items</h2>
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>

          <ul className="space-y-6">
            {cartItems.length === 0 ? (
              <li className="text-center text-xl">Your cart is empty</li>
            ) : (
              cartItems.map((item, index) => {
                console.log("Traversing Item:", item);  // Log each item for debugging

                // Accessing item properties directly
                const itemName = item?.name || "No Name";
                const itemDescription = item?.description || "No Description";
                const itemImageId = item?.imageId || "";
                const itemPrice = (item?.price || 0) / 100;

                console.log("Name:", itemName);
                console.log("Description:", itemDescription);
                console.log("Image ID:", itemImageId);
                console.log("Price:", itemPrice);

                return (
                  <li
                    key={index}
                    className="flex justify-between items-start bg-[#F9FAFB] rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
                  >
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center mb-3 space-x-3">
                        {/* Veg/Non-Veg icon */}
                        {item?.itemAttribute?.vegClassifier === "VEG" ? (
                          <img src={require("../Assets/veg.jpg")} alt="Veg" className="w-5 h-5" />
                        ) : (
                          <img src={require("../Assets/nonveg.jpg")} alt="Non-Veg" className="w-5 h-5" />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-[#000000]">{itemName}</h3>
                      <p className="text-lg font-semibold text-[#603F83FF] mt-1">
                        ₹ {itemPrice}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">{itemDescription}</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 relative mb-4">
                        <img
                          src={IMG_CDN + itemImageId}
                          alt={itemName}
                          className="rounded-md object-cover w-full h-full"
                        />
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center -mt-2">
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="bg-[#603F83FF] text-white py-1 px-3 rounded-lg hover:bg-[#503F73] transition duration-300"
                        >
                          -
                        </button>
                        <span className="mx-4 text-lg">{quantityMap[item?.id] || 1}</span>
                        <button
                          onClick={() => increaseQuantity(item)}
                          className="bg-[#603F83FF] text-white py-1 px-3 rounded-lg hover:bg-[#503F73] transition duration-300"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Item Button */}
                      {quantityMap[item?.id] === 0 && (
                        <button
                          className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                          onClick={() => handleRemoveItem(item?.id)}
                        >
                          Remove Item
                        </button>
                      )}
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        {/* Bill Details Section */}
        <div className="w-1/3 bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#603F83FF] mb-4">Bill Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Total Items ({cartItems.length})</span>
              <span>₹ {totalPrice}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Delivery Fee</span>
              <span>₹ {deliveryCharge}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Extra Discount</span>
              <span className="text-green-500">-₹30</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Platform Fee</span>
              <span>₹ {platformFee}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>GST & Restaurant Charges</span>
              <span>₹ {gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl font-semibold">
              <span>TO PAY</span>
              <span>₹ {finalAmount}</span>
            </div>
          </div>

          {/* Payment Button */}
          <div className="mt-6">
            <button
              className="w-full bg-green-500 text-white py-3 text-lg rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handlePaymentLink}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
