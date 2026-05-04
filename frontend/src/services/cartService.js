const BASE_URL = "http://localhost:5000";

export const getCart = async (userId) => {
  const res = await fetch(`${BASE_URL}/cart/${userId}`);
  return res.json();
};

export const addToCartAPI = async (userId, bookId) => {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ userId, bookId })
  });

  return res.json();
};