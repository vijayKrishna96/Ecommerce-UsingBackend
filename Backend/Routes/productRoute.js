const express = require("express");
const { getAllProducts, addNewProducts, updateProduct, getProductsById, deleteProduct } =
  require("../controllers/productControllers");
const router = express.Router();

router.get("/", getAllProducts);

router.get("/:productId", getProductsById);

router.post("/", addNewProducts); 

router.patch("/:productId", updateProduct);

router.delete("/:productId",deleteProduct)

module.exports = router;
