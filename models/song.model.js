const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  year: Number,
  singer: String
});

const Song = mongoose.model('Song', schema);

module.exports = Song;