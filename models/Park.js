const mongoose = require('mongoose');

const ParkSchema = new mongoose.Schema({
  id: { type : String, required : true, unique: true, dropDups : true },
  name: { type: String, required: true },
  features: {type: Array, required: true },
  hours: String,
  latitude: String,
  longitude: String
});

mongoose.model('Park', ParkSchema);

module.exports = mongoose.model('Park');
