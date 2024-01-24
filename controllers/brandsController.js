const mongoose = require('mongoose');
const Brands = mongoose.model('brands');

exports.getBrands = async (req, res) => {
  try {
    const brands = await Brands.find({});
    res.send(brands);
  } catch (err) {
    console.log(err);
  }
};