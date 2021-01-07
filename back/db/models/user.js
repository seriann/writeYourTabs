const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt"),SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type:String,
    trim: true,
    unique:true,
    required: true
  },
  password:{
    type: String,
    required: true,
    unique: true
  },
  salt: { type:String },
  image: {type: String},
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  ownTabs: [{ type: Schema.Types.ObjectId, ref: "tabs"}],
  favsTabs: [{type: Schema.Types.ObjectId, ref: "tabs"}],
  active: { type: Boolean, default: true },

})

/*userSchema.methods.hash = function(password, salt){
  return bcrypt.hash(password, salt)
}*/

userSchema.pre("save", function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return done(err);
    done(null, isMatch);
  });
};

const User = mongoose.model("user", userSchema);

module.exports = User;
