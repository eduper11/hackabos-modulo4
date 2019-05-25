const express = require("express");
const multer = require("multer");

const checkToken = require("../controllers/session/checkJwtToken");
const getUserProfile = require("../controllers/user/get_user_profile");
const uploadAvatar = require("../controllers/user/upload-avatar");
const getUserWall = require("../controllers/user/get-user-wall");
const updateUserProfile = require("../controllers/user/update-user-profile");

const upload = multer();
const router = express.Router();

router.get("/user/profile", checkToken, getUserProfile);
router.post("/user/avatar", checkToken, upload.single("avatar"), uploadAvatar);
router.get("/user/wall", checkToken, getUserWall);
router.put("./user", checkToken, updateUserProfile);

module.exports = router;
