"use strict";

const express = require("express");

const router = express.Router();

const createAccountController = require("../controllers/account/create_account_controller");

const loginController = require("../controllers/account/login_controller");

const activateAccountController = require("../controllers/account/activate_account_controller");

router.post("/account", createAccountController);

router.post("/account/login", loginController);

router.get("/account/activate", activateAccountController);

module.exports = router;
