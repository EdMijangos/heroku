const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password:String,
  email: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
    default: 'http://lllkd.kcol'
  },
  addresses:
   {
     type: Schema.Types.ObjectId,
     ref: 'Address',
   } 
  ,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    }
  ],
});

module.exports = mongoose.model('user', userSchema)