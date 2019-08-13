const Beer = require('../models/beer');

exports.index = (req, res) => {
  Beer.find()
    .then(beers => res.status(200).json(beers))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {

  Beer.findOne({
    _id: req.params.id
  })
    .then(beer => res.status(200).json(beer))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Beer.create(req.body)
    .then(() => res.status(200).json({ success: "New beer created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Beer.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Beer updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Beer.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Beer deleted" }))
    .catch(err => res.status(404).json(err));
};