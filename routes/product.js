//rutas crear usuarios
const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

//create product
router.post("/", productController.createProduct);

//get all product
router.get("/", productController.getAllProducts);

//update product
router.put("/:id", productController.updateProduct);

//delete product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
