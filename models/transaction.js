const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//         type: 'resistance',
// name: 'Bicep Curl',
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4,

const transactionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a workout name"
  },
  duration: {
    type: Number,
    required: "Enter a duration amount"
  },
  weight: {
    type: Number,
    required: "Enter a weight amount"
  },
  reps: {
    type: Number,
    required: "Enter the amount of reps"
  },
  sets: {
    type: Number,
    required: "Enter the amount of reps"
  },
  distance: {
      type: Number,
      required: "Enter the distance in miles"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", transactionSchema);

module.exports = { Workout };
