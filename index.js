const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
require("./models/categories");
require("./models/customers");
require("./models/products");
require("./models/sales_orders");

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.error("Database Connection Error");
});

app.use(express.json());
app.options(
  ["/product/:id", "/product/delete/:id", "/saleOrder/:id"],
  cors({
    origin: "https://im-frontend.onrender.com",
    methods: "PUT,DELETE",
    preflightContinue: true,
    optionsSuccessStatus: 200,
  })
);

const routes = require("./routes/routes");
app.use(routes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
