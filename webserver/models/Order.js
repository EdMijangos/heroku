const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  restaurante:{
    type: Schema.Types.ObjectId,
    ref: 'Restaurante'
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  },
  pedido: [],
  precio: Number,
  fecha: String,
  //required:true,
});

module.exports = mongoose.model('order', orderSchema)