const mongoose = require('mongoose');
const { Schema } = mongoose;

const AirlineSchema = new Schema({
    airlineid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "airlineid",
    },
    Indigo:{
        type: String,
        required: true
    },
    Vistara:{
        type: String,
        required: true
    },
    Qatar:{
        type: String,
        required: true
    }

  });

  const Airline = mongoose.model('Airline',AirlineSchema);
  module.exports = Airline