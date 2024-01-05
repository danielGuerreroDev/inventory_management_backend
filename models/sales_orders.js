const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const salesOrdersSchema = new mongoose.Schema({
  id: { type: Number },
  created_date: { type: String },
  customer_id: { type: Number },
  order_detail_id: { type: Number },
  delivery_deadline: { type: String },
  delivery: { type: String },
});

module.exports = mongoose.model('salesOrders', salesOrdersSchema);
