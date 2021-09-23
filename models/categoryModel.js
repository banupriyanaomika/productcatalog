const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
 
  categoryName: {
    type: String,
    required: [true, "Please provide category name"],
    unique: true,
  },
},{collection:"category1"});

const category = mongoose.model("category1", categorySchema);

module.exports = category;
