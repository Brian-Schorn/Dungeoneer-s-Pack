
var express = require('express');
var router = express.Router();
var path = require('path');
var Spell = require('../models/spell');


router.get('/all', function (req, res) {

  Spell.find({}, function (err, result) {
    if (err){
      console.log("Error Getting Info From The DB", err);
      res.sendStatus(500);
      return;
    }
    console.log("Something is happening:",result);
    res.send(result)
  });
})

module.exports = router;
