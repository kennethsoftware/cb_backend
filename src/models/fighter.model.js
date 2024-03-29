const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { Schema } = mongoose;

const Fighter = new Schema({
  _id: { type: Number, required: true },
  level: Number,
  strength: Number,
  speed: Number,
  health: Number,
  maxHealth: Number,
  type: String,
  isForSale: { type: Boolean, required: true, default: false },
  isInArena: { type: Boolean, required: true, default: false }
})

Fighter.plugin(timestamps)

Fighter.set('toJSON', {
   transform: function (doc, ret, options) {
     ret.id = ret._id;
     delete ret._id;
     delete ret.__v;
   }
});

module.exports = mongoose.model('Fighter', Fighter);
