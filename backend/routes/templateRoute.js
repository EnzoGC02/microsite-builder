const express = require("express");
const router = express.Router();
const Templates = require("../models/templatesModel");

router.route("/").get((req, res) => {
  Templates.find()
    .then((data) => res.json([{ result: "success" }, { data: data }]))
    .catch((err) => res.status(400).send({ error: err }));
});
router.route("/gettemplates").get((req, res) => {
  Templates.find({}, "templateTitle order image")
    .sort("order")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/:templateId").get((req, res) => {
  Templates.findById(req.params.templateId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/:templateId").delete((req, res) => {
  Templates.findByIdAndDelete(req.params.templateId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/add").post((req, res) => {
  console.log(req.body.templateTitle);
  let template = {};

  template.gjsassets = req.body.gjsassets;
  template.gjscomponents = req.body.gjscomponents;
  template.gjscss = req.body.gjscss;
  template.gjshtml = req.body.gjshtml;
  template.gjsstyles = req.body.gjsstyles;

  const newTemplate = new Templates(template);

  newTemplate
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/save/:templateId").post((req, res) => {
  Templates.findById(req.params.templateId).then((template) => {
    template.gjshtml = req.body.gjshtml;
    template.gjscomponents = req.body.gjscomponents;
    template.gjsassets = req.body.gjsassets;
    template.gjscss = req.body.gjscss;
    template.gjsstyles = req.body.gjsstyles;
    template
      .save()
      .then(() => res.json("updated"))
      .catch((err) => res.status(400).send({ error: err }));
  });
});

module.exports = router;
