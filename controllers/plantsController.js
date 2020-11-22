const db = require("../models");

module.exports={
    findAll: function(req,res){
        db.Plant
            .find(req.query)
            .sort({name:-1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Plant
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Plant
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        console.log(req.body)
        db.Plant
          .findOneAndUpdate({ _id: req.params.id },{notes:req.body.notes})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Plant
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findByUserId: function(req, res) {
        db.Plant
          .find({user_id: req.params.id})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      deletebyuserid: function(req,res){
        db.Plant
          .deleteMany({user_id:req.params.id})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    };
