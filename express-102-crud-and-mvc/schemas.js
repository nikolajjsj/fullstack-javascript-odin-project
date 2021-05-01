// Require Mongoose
var mongoose = require('mongose');

// Define a schema
var Schema = mongoose.Schema;

var someModelSchema = new Schema({
  a_string: String,
  a_data: Date,
});

// Compile model from Schema
var SomeModel = mongoose.model('SomeModel', someModelSchema);


/// Schema types (fields)
var Schema = new Schema({
  name: String,
  binary: ArrayBuffer,
  living: Boolean,
  updated: {
    type: Date,
    default: Date.now()
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    required: true
  },
  mixed: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: {
    stuff: {
      type: String,
      lowercase: true,
      trim: true,
    },
  },
});

var breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12,
    required: [true, 'Why no eggs?'],
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea', 'Water'],
  },
});