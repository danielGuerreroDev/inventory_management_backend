const mongoose = require('mongoose');
const SalesOrders = mongoose.model('salesOrders');

exports.getSalesOrders = async (req, res) => {
  try {
    const salesOrders = await SalesOrders.find({});
    res.send(salesOrders);
  } catch (err) {
    console.log(err);
  }
};