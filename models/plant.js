const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {type: String, required: true },
    image_url: {type: String},
    Family:{type:String},
    user_id:{type:String, required:true},
    genus:{type:String},
    notes:{type:String}
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;