const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  colonia:String,
  calle: String,
  number: Number,
  cp: Number,
  //required:true,
});

module.exports = mongoose.model('address', addressSchema)