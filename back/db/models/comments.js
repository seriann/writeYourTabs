const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text:{
     type: String,
     requiered: true
   },
   owner:{
     type: Schema.Types.ObjectId,
     required: true,
     ref: "user"
   },
   active : {
    type : Boolean,
    default: true
   }
})

const Comment = mongoose.model("comment", commentSchema)

module.exports = Comment
