const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tabSchema = new Schema({
  title:{
    type:String,
    required: true
  },
  text:{
    type:String,
  },
  lines:{
    type: Number,
    required: true
  },
  modelPerLine:[{type: Schema.Types.ObjectId, ref: "modelPerLine"}],
  comments: [{ type:Schema.Types.ObjectId,ref: "comment" }],
  video:{
    type:String
  },
  active : {
   type : Boolean,
   default: true
  }
})

const Tab = mongoose.model("tab", tabSchema)

module.exports = Tab
