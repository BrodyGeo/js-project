// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const BeerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1
  }
}, {
    timestamps: true
  });

module.exports = mongoose.model('Beer', BeerSchema);