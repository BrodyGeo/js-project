const Vendor = require('../models/vendor');

exports.index = (req, res) => {
  Vendor.find()
    .then(vendors => res.status(200).json(vendors))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {

  Vendor.findOne({
    _id: req.params.id
  })
    .then(vendor => res.status(200).json(vendor))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Vendor.create(req.body)
    .then(() => res.status(200).json({ success: "New vendor created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Vendor.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Vendor updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Vendor.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Vendor deleted" }))
    .catch(err => res.status(404).json(err));
};