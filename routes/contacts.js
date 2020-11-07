const express = require("express");

const router = express.Router();
const { getAllContacts } = require("../controllers/contacts");

router.get("/contacts", getAllContacts);

module.exports = router;
