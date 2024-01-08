const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const customersSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
});

module.exports = mongoose.model('customers', customersSchema);
