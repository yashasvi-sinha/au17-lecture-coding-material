const mongoose = require("mongoose");
// import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const smartphoneSchema = new Schema({
  name: String,
  price: Number,
  inStock: Boolean
});

const SmartPhone = mongoose.model("SmartPhone", smartphoneSchema);


module.exports = SmartPhone;