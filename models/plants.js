const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {type: String, required: true },
    image_url: {type: String},
    Family:{type:String},
    user_id:{type:String, required:true},
    notes:{type:String}
});

const Plants = mongoose.model("Plant", plantSchema);

module.exports = Plants;