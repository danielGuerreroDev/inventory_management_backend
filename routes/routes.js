const cors = require('cors');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const brandsController = require('../controllers/brandsController');
const categoriesController = require('../controllers/categoriesController');
const productsController = require('../controllers/productsController');
const salesOrdersController = require('../controllers/salesOrdersController');

router.get('/', cors(), productsController.baseRoute);
router.get('/getBrands', cors(), brandsController.getBrands);
router.get('/getCategories', cors(), categoriesController.getCategories);
router.get('/getProducts', cors(), productsController.getProducts);
router.get('/getProduct/:id', cors(), productsController.getSingleProduct);
router.get('/getSalesOrders', cors(), salesOrdersController.getSalesOrders);
router.put('/product/:id', cors(), jsonParser, productsController.updateProduct);
router.delete('/product/delete/:id', cors(), productsController.deleteProduct);
router.put('/saleOrder/:id', cors(), jsonParser, salesOrdersController.updateSaleOrder);
router.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});


module.exports = router;
