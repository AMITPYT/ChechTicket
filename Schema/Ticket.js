const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    source:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }

  });

  const User = mongoose.model('Ticket',TicketSchema);
  module.exports = User