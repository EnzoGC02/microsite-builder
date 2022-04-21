const express = require("express");
const router = express.Router();
const Projects = require("../models/projectsModel");

router.route("/").get((req, res) => {
  Projects.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/:projectId").get((req, res) => {
  Projects.findById(req.params.projectId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/list/:accountId").get((req, res) => {
  Projects.find()
    .where("accountId")
    .equals(req.params.projectId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/:projectId").delete((req, res) => {
  Projects.findByIdAndDelete(req.params.projectId)
    .then((data) => res.json([{ result: "success" }, { data: data }]))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/add").post((req, res) => {
  let project = {};
  project.title = req.body.title;
  project.description = req.body.description;

  const newProject = new Projects(project);

  newProject
    .save()
    .then((data) => res.json([{ result: "success" }, { data: data }]))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/update/:projectId").post((req, res) => {
  Projects.findById(req.params.projectId).then((project) => {
    project.title = req.body.title;
    project.description = req.body.description;
    project
      .save()
      .then((data) => res.json([{ result: "success" }, { data: data }]))
      .catch((err) => res.status(400).send({ error: err }));
  });
});

module.exports = router;
