import { useContext, useState, useEffect } from "react";
import { CartContext } from "../store/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // alert("Please login first");
      navigate("/login", { state: { from: "/checkout" } });
    }
  }, [user, navigate]);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (!address) {
      alert("Please enter address");
      return;
    }

    console.log("Order placed:", { cart, address, total });

    alert("Order placed successfully!");

    setCart([]); // clear cart

    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <h3>Total: ₹{total}</h3>

      <textarea
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ width: "300px", height: "100px" }}
      />

      <br />

      <button onClick={placeOrder} style={{ marginTop: "10px" }}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;