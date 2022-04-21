const express = require("express");
const router = express.Router();
const Pages = require("../models/pagesModel");

router.route("/getPage/:pageId").get((req, res) => {
  Pages.findById(req.params.pageId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

module.exports = router;
