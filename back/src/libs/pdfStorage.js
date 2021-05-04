const multer = require('multer')
const path = require('path');
const mimeTypes = require('mime-types')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../storage/pdfs'))
  },
  filename: function (req, file, cb) {
    cb(null, `${req.body.author}_${req.body.title}_${Date.now()}.${mimeTypes.extension(file.mimetype)}`)
  }
})

const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 }
})

module.exports = upload
