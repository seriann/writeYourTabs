const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text:{
     type: String,
     requiered: true
   },
   userId:{
     type: Schema.Types.ObjectId,
     required: true,
     ref: "user"
   },
   tabId:{
     type: Schema.Types.ObjectId,
     required:true,
     ref: "tab"
   },
   active : {
    type : Boolean,
    default: true
   }
})

const Comment = mongoose.model("comment", commentSchema)

module.exports = Comment
