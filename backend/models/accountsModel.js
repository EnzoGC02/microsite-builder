const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountsSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    required: true,
  },
  addressCity: {
    type: String,
    required: true,
  },
  addressState: {
    type: String,
    required: true,
  },
  addressPinCode: {
    type: String,
    required: true,
  },
});

const accounts = mongoose.model("Accounts", accountsSchema);
module.exports = accounts;
