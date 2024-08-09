const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  host_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: ['scheduled', 'ongoing', 'completed', 'cancelled'],
    default: 'scheduled'
  }
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
