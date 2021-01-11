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
  modelPerLine:[
    {
      1:{
        type:[Number],
      },
      2:{
        type:[Number],
      },
      3:{
        type:[Number],
      },
      4:{
        type:[Number],
      },
      5:{
        type:[Number],
      },
      6:{
        type:[Number],
      },
      7:{
        type:[Number],
      },
      8:{
        type:[Number],
      },
      9:{
        type: [Number]
      },
      10:{
        type: [Number]
      },
      11:{
        type: [Number]
      },
      12:{
        type: [Number]
      },
      13:{
        type: [Number]
      },
      14:{
        type: [Number]
      },
      15:{
        type: [Number]
      },
      16:{
        type: [Number]
      }
    }
  ],
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
