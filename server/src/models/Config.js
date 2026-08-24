const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  platform: {
    type: String,
    enum: ['PC', 'MOBILE'],
    required: true
  },
  sensibilitySettings: {
    general: Number,
    scope: Number,
    sniper: Number,
    freefire: Number,
    custom: {}
  },
  weaponConfigs: [{
    weaponName: String,
    sensitivity: Number,
    dpi: Number
  }],
  likes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Config', configSchema);
