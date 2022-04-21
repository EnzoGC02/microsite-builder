const express = require("express");
const router = express.Router();
const Accounts = require("../models/accountsModel");

router.route("/").get((req, res) => {
  Accounts.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/:accountId").get((req, res) => {
  Accounts.findById(req.params.accountId)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/:accountId").delete((req, res) => {
  Accounts.findByIdAndDelete(req.params.accountId)
    .then((data) => res.json([{ result: "success" }, { data: data }]))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/add").post((req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  let account = {};
  account.companyName = req.body.companyName;
  account.addressLine1 = req.body.addressLine1;
  account.addressLine2 = req.body.addressLine2;
  account.addressCity = req.body.addressCity;
  account.addressState = req.body.addressState;
  account.addressPinCode = req.body.addressPinCode;

  const newAccount = new Accounts(account);

  newAccount
    .save()
    .then((data) => res.json([{ result: "success" }, { data: data }]))
    .catch((err) => res.status(400).send({ error: err }));
});

router.route("/update/:accountId").post((req, res) => {
  Accounts.findById(req.params.accountId).then((account) => {
    account.companyName = req.body.companyName;
    account.addressLine1 = req.body.addressLine1;
    account.addressLine2 = req.body.addressLine2;
    account.addressCity = req.body.addressCity;
    account.addressState = req.body.addressState;
    account.addressPinCode = req.body.addressPinCode;
    account
      .save()
      .then((data) => res.json([{ result: "success" }, { data: data }]))
      .catch((err) => res.status(400).send({ error: err }));
  });
});

module.exports = router;
