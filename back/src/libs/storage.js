const multer = require('multer')
const path = require('path');
const mimeTypes = require('mime-types')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../storage/imgs'))
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.${mimeTypes.extension(file.mimetype)}`)
  }
})

const upload = multer({ storage: storage })

module.exports = upload
