const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const brandsSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
});

module.exports = mongoose.model('brands', brandsSchema);