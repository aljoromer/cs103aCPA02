'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var SaleItemSchema = Schema( {
  userId: ObjectId,
  itemTitle: String,
  price: Number,
  imgURI: String,
  description:String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'SaleItem', SaleItemSchema );
