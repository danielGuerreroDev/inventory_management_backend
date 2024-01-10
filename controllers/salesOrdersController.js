const mongoose = require('mongoose');
const SalesOrders = mongoose.model('sales_orders');

exports.getSalesOrders = async (req, res) => {
  try {
    const salesOrders = await SalesOrders.aggregate([
      { $lookup:
          {
            from: 'order_detail',
            localField: 'order_detail_id',
            foreignField: 'id',
            as: 'order_details',
            pipeline: [
              { $lookup:
                {
                  from: 'products',
                  localField: 'product_id',
                  foreignField: 'id',
                  as: 'product_details'
                }
              },
            ],
          },
      },
      { $lookup:
        {
          from: 'customers',
          localField: 'customer_id',
          foreignField: 'id',
          as: 'customer_details'
        }
      },
    ])
    res.send(salesOrders);
  } catch (err) {
    console.log(err);
  }
};

exports.updateSaleOrder = async (req, res, next) => {
  try {
    let saleOrderId = parseInt(req.params.id, 10);
    const saleOrderSelected = await SalesOrders.findOne({ id: saleOrderId });
    const saleOrderUpdated = await SalesOrders.findByIdAndUpdate(
      { _id: saleOrderSelected._id },
      { $set: req.body }
    );
    res.send(saleOrderUpdated);
  } catch (err) {
    console.log(err);
  }
};