const express = require("express");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.route("/signup").get((req, res, next) => {});

module.exports = authRouter;
