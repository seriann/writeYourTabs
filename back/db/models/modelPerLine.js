const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelSchema = new Schema({
  1:[{ type: String }],
  2:[{ type: String }],
  3:[{ type: String }],
  4:[{ type: String }],
  5:[{ type: String }],
  6:[{ type: String }],
  7:[{ type: String }],
  8:[{ type: String }],
  9:[{ type: String }],
 10:[{ type: String }],
 11:[{ type: String }],
 12:[{ type: String }],
 13:[{ type: String }],
 14:[{ type: String }],
 15:[{ type: String }],
 16:[{ type: String }],
})

const ModelPerLine = mongoose.model("modelPerLine", modelSchema)

module.exports = ModelPerLine
