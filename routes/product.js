//rutas crear usuarios
const express = require("express");
const router = express.Router();
const multer = require('multer')
const storage = require('../config/multer');
const productController = require("../controller/productController");
const uploader = multer({storage});

//create product
router.post("/" ,productController.createProduct);

//get all product
router.get("/", productController.getAllProducts);

//update product
router.put("/:id", productController.updateProduct);

//delete product
router.delete("/:id", productController.deleteProduct);

router.post('/upload-image/:id', uploader.single('image'), productController.uploadImage);

router.get('/get-image/:image', productController.getImageFile);


module.exports = router;
