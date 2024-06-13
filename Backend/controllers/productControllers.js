const Product = require("../Model/productModel");

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  res.json(products);
};
const getProductsById = async (req, res) => {
 try{
  const productbyId = await Product.findById(req.params.productId).exec();
  res.status(200).json(productbyId);
 }catch{
  res.status(404).send("Product not found");
 }
};
const addNewProducts = async (req, res) => {
  const productData = req.body
  const product = new Product(productData)
  await product.save()
  res.status(201).json(product)
};
const updateProduct = async (req, res) => {
  try{
    const updatedproduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true })
      res.status(201).json(updatedproduct)
  }catch{
    res.status(404).send("product not found")
  }
};

const deleteProduct = async(req ,res) =>{
  try{
    const deleted = await Product.findByIdAndDelete(
      req.params.productId,
      req.body,
      { new: true })
      res.status(200).send("deleted")
}catch{
  res.status(404).send("product not found")
}
};

module.exports = {
  getAllProducts,
  getProductsById,
  addNewProducts,
  updateProduct,
  deleteProduct,
}
