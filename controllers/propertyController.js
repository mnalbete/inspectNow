const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Property
      .find({userId: req.user._id})
      .then(dbProp => { res.json(dbProp);})
      .catch(err => { res.json(err);})
    },
    findOne: function(req, res) {
      db.Property
        .findOne({_id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Property
        .create(req.body)
        .then(({ _id }) => db.User.findOneAndUpdate({_id: req.body.userId}, { $push: { properties: _id } }, { new: true }))
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },    
    update: function(req, res) {
      let params = {};
      for(let prop in req.body) if(req.body[prop]) params[prop] = req.body[prop];
      db.Property
        .findOneAndUpdate({ _id: req.params.id }, params, {new: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  remove: function (req, res) {
    let user_id;
    db.Property
      .findById({ _id: req.params.id })
      .then(dbModel => {
        user_id = dbModel.userId;
        dbModel.remove();
      })
      .then(() => db.User.findOneAndUpdate({ _id: user_id }, { $pull: { properties: req.params.id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

      // db.Property
      // .findById({ _id: req.params.id })
      // .then(dbModel => {
      //   dbModel.remove(); })
      //   .then(() => db.User.findOneAndUpdate({_id: req.user._id}, { $pull: { properties: req.params.id } }, { new: true }))
      //   .then(dbModel => res.json(dbModel))
      //   .catch(err => res.status(422).json(err));
    }
  };