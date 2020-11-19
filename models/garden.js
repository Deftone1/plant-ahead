const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gardenSchema = new Schema({
  name:{type:String, required: true },
  plants: [{type: String}],
  user_id:{type:String}
});

const Garden = mongoose.model("Garden", gardenSchema);

module.exports = Garden;