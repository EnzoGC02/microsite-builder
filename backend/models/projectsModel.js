const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projects = mongoose.model("Projects", projectsSchema);
module.exports = projects;
