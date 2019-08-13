// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const VendorSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
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

module.exports = mongoose.model('Vendor', VendorSchema);