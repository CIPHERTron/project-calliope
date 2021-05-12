const express = require("express")
const router = express.Router()

const {
	uploadFiles,
	// getBlogs,
	// createPost,
	// getPost,
} = require("../controllers/blog")
const { auth } = require("../middlewares/auth")
const multer = require("multer")

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/")
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}_${file.originalname}`)
	},
	fileFilter: (req, file, cb) => {
		const ext = path.extname(file.originalname)
		if (ext !== ".jpg" && ext !== ".png" && ext !== ".mp4") {
			return cb(
				res
					.status(400)
					.end(
						"only jpg, png, mp4 is allowed"
					),
				false
			)
		}
		cb(null, true)
	},
})

const upload = multer({ storage: storage }).single("file")

//=================================
//             Blog
//=================================

// fieldname: 'file',
// originalname: 'React.png',
// encoding: '7bit',
// mimetype: 'image/png',
// destination: 'uploads/',
// filename: '1573656172282_React.png',
// path: 'uploads/1573656172282_React.png',
// size: 24031

router.post("/uploadfiles", uploadFiles)

// router.post("/createPost", createPost)

// router.get("/getBlogs", getBlogs)

// router.post("/getPost", getPost)

module.exports = router
