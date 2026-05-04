import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";


function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd",
        alignItems: "center"
      }}
    >
      {/* Left */}
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        📚 MyBookStore
      </h2>

      {/* Right */}
      <div style={{ display: "flex", gap: "20px" }}>
        <div onClick={() => navigate("/category")} style={{ cursor: "pointer" }}>
          📙 Category
        </div>

        <div onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
          🛒 Cart ({totalItems})
        </div>

        {user ? (
          <div>👤</div>
        ) : (
          <div onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            👤 Login
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;