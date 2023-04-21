const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    desc: {
      type: String,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    score: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
