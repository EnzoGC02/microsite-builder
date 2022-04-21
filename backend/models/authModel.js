const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authLoginSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const auth = mongoose.model("Auth", authLoginSchema);

module.exports = auth;
