const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Garden
      .find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Garden
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Garden
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Garden
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Garden
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function(req, res) {
    db.Garden
      .find({user_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addplant: function(req, res){
    db.Garden
      .findOneAndUpdate({_id:req.params.id}, {$push:{plants:req.params.plants_id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeplant: function(req,res){
    db.Garden
      .findOneAndUpdate({_id:req.params.id}, {$pull:{plants:req.params.plants_id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  cleargardens: function(req,res){
    db.Garden
      .deleteMany({user_id:req.params.id})
      .then(dbModel =>res.json(dbModel))
      .catch(err => res.json(422).json(err))
  }
}
