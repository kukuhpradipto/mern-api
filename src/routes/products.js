const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

//CREATE => POST
router.post("/product", productsController.createProduct);

// READ => GET
router.get("/products", productsController.getAllProduct);

module.exports = router;
