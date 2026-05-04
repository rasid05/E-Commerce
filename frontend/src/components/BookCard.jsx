import { useContext } from "react";
import { CartContext } from "../store/CartContext";

function BookCard({ book }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        textAlign: "center"
      }}
    >
      <img
        src={book.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8_7V5mTd0TRwY-7qiQvCDXRPpfh5-S6ovw&s"}
        alt={book.title}
        width="120"
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop
          e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8_7V5mTd0TRwY-7qiQvCDXRPpfh5-S6ovw&s";
        }}
      />

      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p><strong>₹{book.price}</strong></p>

      <button onClick={() => addToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
}

export default BookCard;