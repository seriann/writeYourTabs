const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tabSchema = new Schema({
  author:{
    type:String,
    required: true
  },
  title:{
    type:String,
    required: true
  },
  text:{
    type:String,
  },
  genre:{
    type:String,
    required: true
  },
  pdf:{
    type:String,
    required:true
  },
  createdAt:{
    type:String
  },
  active : {
   type : Boolean,
   default: true
  }
},{ timestamps: { createdAt: 'created_at' } })

const Tab = mongoose.model("tab", tabSchema)

module.exports = Tab
