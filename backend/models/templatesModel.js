const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const templatesSchema = new Schema({
  templateTitle: {
    type: String,
    required: false,
  },
  gjsassets: {
    type: String,
    required: false,
  },
  gjscomponents: {
    type: String,
    required: false,
  },
  gjscss: {
    type: String,
    required: false,
  },
  gjshtml: {
    type: String,
    required: false,
  },
  gjsstyles: {
    type: String,
    required: false,
  },
});

const templates = mongoose.model("templates", templatesSchema);
module.exports = templates;
