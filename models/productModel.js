const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId:String,
  productName:String,
  qtyPerUnit:Number,
  unitPrice:Number,
  unitInStock:Number,
  discontinued:Boolean,
  categoryId: 
 [{
      type: mongoose.Schema.ObjectId,
      ref: 'category1',
    }],
  
},{collection:"product1"});

// Query Middleware
productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'categoryId',
    select: 'categoryId categoryName'
  })
  next();
});

const product = mongoose.model("product1", productSchema);

module.exports = product;
