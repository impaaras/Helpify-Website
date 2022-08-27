const express = require("express");
const {registerUser, loginUser, logOut, forgetPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, deleteUser} = require("../controller/userController");
const { isAuthUser, authorizeUser } = require("../middleware/auth");
const router  = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgetPassword)
router.route("/password/reset/:token").put(resetPassword) 
// router.route("/products").get();
// router.route("/products/new").get(isAuthUser,authorizeUser("admin"));
router.route("/logout").get(logOut);

router.route("/profile").get(isAuthUser,getUserDetails);
router.route("/password/update").put(isAuthUser, updatePassword);
router.route("/profile/update").put(isAuthUser,updateProfile);
router.route("/delete").delete(isAuthUser,deleteUser);

module.exports = router;