const express = require("express");

const checkJwtToken = require("../controllers/session/checkJwtToken");
const createPost = require("../controllers/post/create-post");

const router = express.Router();

router.post("/post", checkJwtToken, createPost);

module.exports = router;
