const express = require("express");
const router = express.Router();
const Pages = require("../models/pagesModel");

router.route("/").get((req, res) => {
  Pages.find()
    .then((data) => res.json([{ result: "success" }, { data: data }]))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/:pageId").get((req, res) => {
  Pages.findById(req.params.pageId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/projectPages/:projectId").get((req, res) => {
  console.log(req.params.projectId);
  Pages.find({ projectId: req.params.projectId })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/:pageId").delete((req, res) => {
  Pages.findByIdAndDelete(req.params.pageId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/add").post((req, res) => {
  console.log(req.body.pageTitle);
  let page = {};
  page.author = req.body.author;
  page.authorId = req.body.authorId;
  page.created = req.body.created;
  page.accountId = req.body.accountId;
  page.projectId = req.body.projectId;
  page.pageTitle = req.body.pageTitle;
  page.gjsassets = req.body.gjsassets;
  page.gjscomponents = req.body.gjscomponents;
  page.gjscss = req.body.gjscss;
  page.gjshtml = req.body.gjshtml;
  page.gjsstyles = req.body.gjsstyles;

  const newPage = new Pages(page);

  newPage
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/save/:pageId").post((req, res) => {
  Pages.findById(req.params.pageId).then((page) => {
    page.gjshtml = req.body.gjshtml;
    page.gjscomponents = req.body.gjscomponents;
    page.gjsassets = req.body.gjsassets;
    page.gjscss = req.body.gjscss;
    page.gjsstyles = req.body.gjsstyles;
    page
      .save()
      .then(() => res.json("updated"))
      .catch((err) => res.status(400).send({ error: err }));
  });
});

module.exports = router;
