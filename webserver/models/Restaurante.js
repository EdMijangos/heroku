const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restSchema = new Schema({
  name: String,
  ordenes: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
  }],
  menu: [],
  address: String,
  category: String,
  //required:true,
});

module.exports = mongoose.model('restaurante', restSchema)