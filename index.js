const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
require("./models/products");
require("./models/categories");

mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.error("Database Connection Error");
});

app.use(express.json());
app.options(
  ["/product/:id", "/product/delete/:id"],
  cors({
    origin: "https://inventory-management-net.onrender.com",
    methods: "PUT,DELETE",
    preflightContinue: true,
    optionsSuccessStatus: 200,
  })
);

const routes = require("./routes/productsRoutes");
app.use(routes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
