
var express = require('express');
var router = express.Router();
var path = require('path');
var Journal = require('../models/journal');


router.get('/all', function (req, res) {
  userID = req.user._id;
  Journal.find({googleId: userID}, function (err, result) {
    if (err){
      console.log("Error Getting Info From The DB", err);
      res.sendStatus(500);
      return;
    }
    console.log("Something is happening:",result);
    res.send(result)
  });
})


router.post('/', function (req, res) {
  console.log('Req User', req.user);
  var entry = new Journal(req.body);
  entry.googleId = req.user._id;
  entry.save(function (err){
    if(err){
      console.log('Error Saving to DB', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  })
})
module.exports = router;
