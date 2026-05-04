const express = require("express");
const router = express.Router();

const { getBooks, addSampleBooks } = require("../controllers/bookController");

router.get("/", getBooks);
router.get("/seed", addSampleBooks);

module.exports = router;