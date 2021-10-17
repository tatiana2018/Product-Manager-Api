"use strict";

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  productId: {
    type: Number,
    require: true,
    trim: true
  },
  productName: {
    type: String,
    require: true,
    trim: true
  },
  characteristics: {
    type: String,
    require: true,
    trim: true
  },
  dateLunch:{
    type: Date,
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true
  },
  country: {
    type: String,
    require: true,
    trim: true
  },
  price: {
    type: Number,
    require: true,
    trim: true
  },
  available: {
    type: Number,
    require: true,
    trim: true
  },
  sales: {
    type: Number,
    require: true,
    trim: true
  },
  Image: {
    type: String,
    require: true,
    trim: true
  }
});

module.exports = mongoose.model("Product", ProductSchema);
