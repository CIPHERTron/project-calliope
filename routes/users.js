const express = require("express")
const router = express.Router()

const { auth } = require("../middlewares/auth")
const {
	authController,
	registerController,
	loginController,
	logoutController,
} = require("../controllers/users")

//=================================
//             User
//=================================

router.get("/auth", auth, authController)

router.post("/register", registerController)

router.post("/login", loginController)

router.get("/logout", auth, logoutController)

module.exports = router
