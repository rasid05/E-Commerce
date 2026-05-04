const Book = require("../models/Book");

// GET /books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addSampleBooks = async (req, res) => {
  await Book.insertMany([
    // {
    //   title: "Atomic Habits",
    //   author: "James Clear",
    //   price: 499,
    //   category: "Self-help",
    //   description: "Build good habits",
    //   image: "https://via.placeholder.com/120",
    //   stock: 10,
    // },
    // {
    //   title: "Deep Work",
    //   author: "Cal Newport",
    //   price: 399,
    //   category: "Productivity",
    //   description: "Focus deeply",
    //   image: "https://via.placeholder.com/120",
    //   stock: 5,
    // },
  ]);

  res.send("Sample books added");
};


module.exports = { getBooks, addSampleBooks };