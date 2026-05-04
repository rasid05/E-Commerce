import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const navigate = useNavigate();
  const removeItem = (id) => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div
              key={item._id}
              style={{
                borderBottom: "1px solid #ddd",
                marginBottom: "10px",
                paddingBottom: "10px"
              }}
            >
              <h3>{item.title}</h3>
              <p>₹{item.price} × {item.quantity}</p>

              <button onClick={() => removeItem(item._id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
      {cart.length != 0 && (<button
        style={{ marginTop: "20px", padding: "10px 15px" }}
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>)}

    </div>
  );
}

export default Cart;