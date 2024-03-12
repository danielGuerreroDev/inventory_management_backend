const mongoose = require("mongoose");
const Products = mongoose.model("products");

exports.all = async (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
      console.log(err)
    }
  });
};

exports.baseRoute = async (req, res) => {
  res.send("Server Running");
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    let productId = parseInt(req.params.id, 10);
    const product = await Products.findOne({ id: productId });
    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    let updatedProductId = parseInt(req.params.id, 10);
    const selectedProduct = await Products.findOne({ id: updatedProductId });
    const updatedProduct = await Products.findByIdAndUpdate(
      { _id: selectedProduct._id },
      { $set: req.body }
    );
    res.send(updatedProduct);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    let updatedProductId = parseInt(req.params.id, 10);
    const selectedProduct = await Products.findOne({ id: updatedProductId });
    const deletedProduct = await Products.deleteOne({
      _id: selectedProduct._id,
    });
    res.send(deletedProduct);
  } catch (err) {
    console.log(err);
  }
};
