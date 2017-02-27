/**
 * User schema for Mongoose.
 *
 * @module models/user
 */
var mongoose = require('mongoose');

var spellSchema = mongoose.Schema({
  name: String,
  desc: String,
  higher_level: String,
  page: String,
  range: String,
  components: String,
  ritual: String,
  duration: String,
  concentration: String,
  casting_time: String,
  level: String,
  school: String,
  class: String,
  archetype: String,
  domains: String,
  patrons: String,
  circles: String
});

module.exports = mongoose.model('Spell', spellSchema);
