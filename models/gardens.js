const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gardenSchema = new Schema({
  plants: [{type: String, required: true }],
});

const Garden = mongoose.model("Garden", gardenSchema);

module.exports = Garden;