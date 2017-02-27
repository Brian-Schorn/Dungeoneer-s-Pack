/**
 * User schema for Mongoose.
 *
 * @module models/user
 */
var mongoose = require('mongoose');

var journalSchema = mongoose.Schema({
  googleId: String,
  entry: String,
  date: Date
});

module.exports = mongoose.model('Journal', journalSchema);
