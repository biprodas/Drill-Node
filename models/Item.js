const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create item Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  details: {
    type : String
  },
  date: {
    type: Date,
    default: Date.now
  }
});


// Create item Model
const Item = mongoose.model('item', ItemSchema);

module.exports = Item;