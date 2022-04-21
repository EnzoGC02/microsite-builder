const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pagesSchema = new Schema({
  pageTitle: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  authorId: {
    type: String,
    required: false,
  },
  created: {
    type: Date,
    required: false,
  },
  accountId: {
    type: String,
    required: false,
  },
  projectId: {
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

const pages = mongoose.model("Pages", pagesSchema);
module.exports = pages;
